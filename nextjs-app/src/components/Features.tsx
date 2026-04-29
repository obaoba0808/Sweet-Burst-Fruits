'use client';

export default function Features() {
  const features = [
    {
      icon: '🌿',
      bgColor: 'bg-green-50',
      title: '當季新鮮',
      description: '嚴選當季最新鮮水果',
    },
    {
      icon: '🎁',
      bgColor: 'bg-amber-50',
      title: '精緻禮盒',
      description: '送禮自用兩相宜',
    },
    {
      icon: '❤️',
      bgColor: 'bg-pink-50',
      title: '健康美味',
      description: '天然營養好安心',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex items-center gap-4 p-5 md:p-6 rounded-xl ${feature.bgColor}`}
            >
              <span className="text-4xl shrink-0 leading-none" role="img" aria-label={feature.title}>
                {feature.icon}
              </span>
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 leading-snug">
                  {feature.title}
                </h3>
                <p className="mt-0.5 text-xs md:text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
