export const calendarExample = `<Calendar mode="single" showOutsideDays />`;

export const calendarVariantsExample = `<div className="flex flex-wrap gap-4">
  <Calendar calendarButtonVariant="default" mode="single" />
  <Calendar calendarButtonVariant="primary" mode="single" />
  <Calendar calendarButtonVariant="primary-bordered" mode="single" />
  <Calendar calendarButtonVariant="primary-ghost" mode="single" />
  <Calendar calendarButtonVariant="secondary" mode="single" />
  <Calendar calendarButtonVariant="success" mode="single" />
  <Calendar calendarButtonVariant="warning" mode="single" />
  <Calendar calendarButtonVariant="danger" mode="single" />
</div>`;

export const calendarRoundsExample = `<div className="flex flex-wrap gap-4">
  <div className="space-y-1">
    <Calendar calendarButtonRounded="xs" mode="single" />
    <Text>xs</Text>
  </div>
  <div className="space-y-1">
    <Calendar calendarButtonRounded="sm" mode="single" />
    <Text>sm</Text>
  </div>
  <div className="space-y-1">
    <Calendar mode="single" />
    <Text>md</Text>
  </div>
  <div className="space-y-1">
    <Calendar calendarButtonRounded="lg" mode="single" />
    <Text>lg</Text>
  </div>
  <div className="space-y-1">
    <Calendar calendarButtonRounded="xl" mode="single" />
    <Text>xl</Text>
  </div>
  <div className="space-y-1">
    <Calendar calendarButtonRounded="full" mode="single" />
    <Text>full</Text>
  </div>
</div>`;

export const calendarModeExample = `<div className="flex flex-wrap gap-4">
  <div className="space-y-1">
    <Calendar mode="single" />
    <Text>single</Text>
  </div>
  <div className="space-y-1">
    <Calendar mode="range" />
    <Text>range</Text>
  </div>
  <div className="space-y-1">
    <Calendar mode="multiple" />
    <Text>multiple</Text>
  </div>
</div>`;

export const calendarPropertiesExample = `<Calendar
  mode="single"
  calendarButtonVariant="default"
  calendarButtonRounded="md"
/>`;
