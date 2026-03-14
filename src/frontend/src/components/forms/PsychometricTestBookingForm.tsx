import { Tag } from "lucide-react";
import { useState } from "react";
import { Grade } from "../../backend";
import { useSubmitPsychometricTestBooking } from "../../hooks/mutations/useSubmitPsychometricTestBooking";
import SubmissionStatePanel from "./SubmissionStatePanel";

export default function PsychometricTestBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    grade: "nine" as "eight" | "nine" | "ten",
    email: "",
    phone: "",
    cityState: "",
    preferredDate: "",
    preferredTimeWindow: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const mutation = useSubmitPsychometricTestBooking();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.cityState.trim())
      newErrors.cityState = "City/State is required";
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = "Please provide at least email or phone";
      newErrors.phone = "Please provide at least email or phone";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.preferredDate)
      newErrors.preferredDate = "Preferred date is required";
    if (!formData.preferredTimeWindow.trim())
      newErrors.preferredTimeWindow = "Preferred time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const gradeEnum: Grade =
      formData.grade === "eight"
        ? Grade.eight
        : formData.grade === "nine"
          ? Grade.nine
          : Grade.ten;

    mutation.mutate(
      {
        name: formData.name,
        grade: gradeEnum,
        email: formData.email,
        phone: formData.phone,
        cityState: formData.cityState,
        preferredDate: formData.preferredDate,
        preferredTimeWindow: formData.preferredTimeWindow,
        notes: formData.notes,
      },
      {
        onSuccess: () => {
          setFormData({
            name: "",
            grade: "nine",
            email: "",
            phone: "",
            cityState: "",
            preferredDate: "",
            preferredTimeWindow: "",
            notes: "",
          });
          setErrors({});
        },
      },
    );
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (mutation.isSuccess) {
    return (
      <SubmissionStatePanel
        type="success"
        title="Booking Request Submitted!"
        message="Thank you for booking a psychometric test. We'll contact you within 1-2 business days to confirm your appointment and provide further details."
        onReset={() => mutation.reset()}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-card border border-border rounded-xl p-6 md:p-8"
    >
      {/* Pricing Callout */}
      <div className="flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-600/30 rounded-lg p-4 mb-2">
        <div className="flex items-center gap-2">
          <Tag className="w-5 h-5 text-amber-600" />
          <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
            Intro Offer
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl md:text-2xl font-bold text-amber-600">
            Rs. 749
          </span>
          <span className="text-sm text-muted-foreground line-through">
            Rs. 1249
          </span>
        </div>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Full Name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      {/* Grade */}
      <div>
        <label
          htmlFor="grade"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Current Grade <span className="text-destructive">*</span>
        </label>
        <select
          id="grade"
          value={formData.grade}
          onChange={(e) => handleChange("grade", e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <option value="eight">8th Grade</option>
          <option value="nine">9th Grade</option>
          <option value="ten">10th Grade</option>
        </select>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Phone Number <span className="text-destructive">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
          placeholder="+91 98765 43210"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
        )}
      </div>

      {/* City/State */}
      <div>
        <label
          htmlFor="cityState"
          className="block text-sm font-medium text-foreground mb-2"
        >
          City/State <span className="text-destructive">*</span>
        </label>
        <input
          id="cityState"
          type="text"
          value={formData.cityState}
          onChange={(e) => handleChange("cityState", e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
          placeholder="e.g., Mumbai, Maharashtra"
        />
        {errors.cityState && (
          <p className="mt-1 text-sm text-destructive">{errors.cityState}</p>
        )}
      </div>

      {/* Preferred Date */}
      <div>
        <label
          htmlFor="preferredDate"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Preferred Date <span className="text-destructive">*</span>
        </label>
        <input
          id="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={(e) => handleChange("preferredDate", e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
        />
        {errors.preferredDate && (
          <p className="mt-1 text-sm text-destructive">
            {errors.preferredDate}
          </p>
        )}
      </div>

      {/* Preferred Time Window */}
      <div>
        <label
          htmlFor="preferredTimeWindow"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Preferred Time Window <span className="text-destructive">*</span>
        </label>
        <select
          id="preferredTimeWindow"
          value={formData.preferredTimeWindow}
          onChange={(e) => handleChange("preferredTimeWindow", e.target.value)}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <option value="">Select a time window</option>
          <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
          <option value="Afternoon (12 PM - 3 PM)">
            Afternoon (12 PM - 3 PM)
          </option>
          <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
        </select>
        {errors.preferredTimeWindow && (
          <p className="mt-1 text-sm text-destructive">
            {errors.preferredTimeWindow}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Notes/Questions (Optional)
        </label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
          placeholder="Any specific requirements or questions?"
        />
      </div>

      {/* Error State */}
      {mutation.isError && (
        <SubmissionStatePanel
          type="error"
          title="Submission Failed"
          message={
            mutation.error instanceof Error
              ? mutation.error.message
              : "Please try again later."
          }
        />
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {mutation.isPending ? "Submitting..." : "Book Psychometric Test"}
      </button>
    </form>
  );
}
