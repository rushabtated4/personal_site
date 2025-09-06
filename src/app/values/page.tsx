import values from '@/data/values.json'

export default function ValuesPage() {
  return (
    <div className="mx-auto w-full max-w-[1084px] px-4 py-8 md:px-0 md:py-16">
      <div className="md:grid md:grid-cols-12 md:gap-5">
        {/* One column gap at start - desktop only */}
        <div className="hidden md:block md:col-span-1" />
        
        {/* Headline - 1 column */}
        <div className="hidden md:block md:col-span-1">
          <h1 className="text-3xl font-semibold mb-12">
            {values.title}
          </h1>
        </div>
        
        {/* Empty space for right alignment - 4 columns */}
        <div className="hidden md:block md:col-span-4" />
        
        {/* Content - 5 columns, right aligned */}
        <div className="md:col-span-5 space-y-8">
          <div className="space-y-6">
            {values.items.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-base font-medium text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* One column gap at end - desktop only */}
        <div className="hidden md:block md:col-span-1" />
      </div>
    </div>
  )
}