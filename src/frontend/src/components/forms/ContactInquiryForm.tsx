import { useState } from 'react';
import { useSubmitContactInquiry } from '../../hooks/mutations/useSubmitContactInquiry';
import { ContactMethod, Grade, WhoIsFilling } from '../../backend';
import SubmissionStatePanel from './SubmissionStatePanel';

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    whoIsFilling: 'student' as 'student' | 'parent',
    grade: 'nine' as 'eight' | 'nine' | 'ten',
    cityState: '',
    email: '',
    phone: '',
    preferredContactMethod: 'email' as 'email' | 'phone' | 'both',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const mutation = useSubmitContactInquiry();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.cityState.trim()) newErrors.cityState = 'City/State is required';
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = 'Please provide at least email or phone';
      newErrors.phone = 'Please provide at least email or phone';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whoIsFillingEnum: WhoIsFilling =
      formData.whoIsFilling === 'student' ? WhoIsFilling.student : WhoIsFilling.parent;
    const gradeEnum: Grade =
      formData.grade === 'eight' ? Grade.eight : formData.grade === 'nine' ? Grade.nine : Grade.ten;
    const contactMethodEnum: ContactMethod =
      formData.preferredContactMethod === 'email'
        ? ContactMethod.email
        : formData.preferredContactMethod === 'phone'
          ? ContactMethod.phone
          : ContactMethod.both;

    mutation.mutate(
      {
        name: formData.name,
        whoIsFilling: whoIsFillingEnum,
        grade: gradeEnum,
        cityState: formData.cityState,
        email: formData.email,
        phone: formData.phone,
        preferredContactMethod: contactMethodEnum,
        message: formData.message,
      },
      {
        onSuccess: () => {
          setFormData({
            name: '',
            whoIsFilling: 'student',
            grade: 'nine',
            cityState: '',
            email: '',
            phone: '',
            preferredContactMethod: 'email',
            message: '',
          });
          setErrors({});
        },
      }
    );
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  if (mutation.isSuccess) {
    return (
      <SubmissionStatePanel
        type="success"
        title="Message Sent Successfully!"
        message="Thank you for contacting us. We'll get back to you within 1-2 business days via your preferred contact method."
        onReset={() => mutation.reset()}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-xl p-6 md:p-8">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
          placeholder="Enter your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
      </div>

      {/* Who is Filling */}
      <div>
        <label htmlFor="whoIsFilling" className="block text-sm font-medium text-foreground mb-2">
          I am a <span className="text-destructive">*</span>
        </label>
        <select
          id="whoIsFilling"
          value={formData.whoIsFilling}
          onChange={(e) => handleChange('whoIsFilling', e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <option value="student">Student</option>
          <option value="parent">Parent</option>
        </select>
      </div>

      {/* Grade */}
      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-foreground mb-2">
          Current Grade <span className="text-destructive">*</span>
        </label>
        <select
          id="grade"
          value={formData.grade}
          onChange={(e) => handleChange('grade', e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <option value="eight">8th Grade</option>
          <option value="nine">9th Grade</option>
          <option value="ten">10th Grade</option>
        </select>
      </div>

      {/* City/State */}
      <div>
        <label htmlFor="cityState" className="block text-sm font-medium text-foreground mb-2">
          City/State <span className="text-destructive">*</span>
        </label>
        <input
          id="cityState"
          type="text"
          value={formData.cityState}
          onChange={(e) => handleChange('cityState', e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
          placeholder="e.g., Mumbai, Maharashtra"
        />
        {errors.cityState && <p className="mt-1 text-sm text-destructive">{errors.cityState}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number <span className="text-destructive">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
          placeholder="+91 98765 43210"
        />
        {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-foreground mb-2">
          Preferred Contact Method <span className="text-destructive">*</span>
        </label>
        <select
          id="preferredContactMethod"
          value={formData.preferredContactMethod}
          onChange={(e) => handleChange('preferredContactMethod', e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="both">Both Email and Phone</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Your Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={5}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
          placeholder="Tell us how we can help you..."
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
      </div>

      {/* Error State */}
      {mutation.isError && (
        <SubmissionStatePanel
          type="error"
          title="Submission Failed"
          message={mutation.error instanceof Error ? mutation.error.message : 'Please try again later.'}
        />
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {mutation.isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
