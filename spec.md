# Specification

## Summary
**Goal:** Replace the native counseling booking form on the 1:1 Counseling Session page with an embedded Tally form.

**Planned changes:**
- Remove the `CounselingBookingForm` component from `CounselingPage.tsx` and replace it with a Tally iframe embed (`https://tally.so/embed/EkX2OB?hideTitle=1&dynamicHeight=1`)
- Load the Tally embed script (`https://tally.so/widgets/embed.js`) dynamically via a `useEffect` hook, calling `Tally.loadEmbeds()` if available or injecting the script tag if not
- Reuse or update the existing `TallyFormEmbed` component to support this embed pattern
- Ensure scroll-to-form functionality still targets the Tally embed section
- All other sections of `CounselingPage.tsx` (hero, session expectations, benefits) remain unchanged

**User-visible outcome:** Visitors to the 1:1 Counseling Session page will see the Tally form rendered in place of the previous native booking form, allowing them to book a session through Tally.
