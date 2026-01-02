import { useState } from 'react';
import { X, Play } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  thumbnail: string;
  url: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'video',
    title: 'FounderSetu Event Highlights',
    thumbnail: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'events',
  },
  {
    id: 2,
    type: 'image',
    title: 'Networking Session',
    thumbnail: 'https://images.pexels.com/photos/3184619/pexels-photo-3184619.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://images.pexels.com/photos/3184619/pexels-photo-3184619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'events',
  },
  {
    id: 3,
    type: 'image',
    title: 'Founder Panel Discussion',
    thumbnail: 'https://images.pexels.com/photos/3184595/pexels-photo-3184595.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://images.pexels.com/photos/3184595/pexels-photo-3184595.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'events',
  },
  {
    id: 4,
    type: 'video',
    title: 'Founder Stories',
    thumbnail: 'https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    category: 'stories',
  },
  {
    id: 5,
    type: 'image',
    title: 'Collaborative Workspace',
    thumbnail: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'community',
  },
  {
    id: 6,
    type: 'image',
    title: 'Community Building',
    thumbnail: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'community',
  },
  {
    id: 7,
    type: 'video',
    title: 'Success Stories',
    thumbnail: 'https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://www.youtube.com/embed/2Xc9gXyxvf0',
    category: 'stories',
  },
  {
    id: 8,
    type: 'image',
    title: 'Mentorship Moments',
    thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'community',
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'events', label: 'Events' },
    { id: 'stories', label: 'Stories' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <section id="gallery" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Gallery
          </h2>
          <p className="text-xl text-[#6BA3BE] max-w-3xl mx-auto">
            Experience the energy and impact of FounderSetu through our events and community moments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-[#0C969C] text-white shadow-lg'
                  : 'bg-[#0C969C]/20 text-[#6BA3BE] hover:bg-[#0C969C]/40'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0C969C]/20 to-[#0A7075]/20 border border-[#0C969C]/30 hover:border-[#0C969C]/60 transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {item.type === 'video' && (
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-[#0C969C] p-3 rounded-full">
                    <Play className="text-white" size={24} fill="white" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#031716] rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-[#0C969C] hover:bg-[#0A7075] p-2 rounded-full transition-all duration-200"
              >
                <X className="text-white" size={24} />
              </button>

              {selectedItem.type === 'video' ? (
                <div className="aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedItem.url}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-auto"
                />
              )}

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedItem.title}
                </h2>
                <div className="inline-block bg-[#0C969C]/20 px-4 py-2 rounded-full">
                  <p className="text-[#0C969C] font-semibold text-sm capitalize">
                    {selectedItem.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
