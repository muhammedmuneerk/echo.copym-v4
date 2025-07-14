import { MapPin, TrendingUp, Coins } from "lucide-react";

const mockAsset = {
  id: 1,
  title: "Premium Office Building",
  category: "Real Estate",
  location: "New York, USA",
  expectedRoi: "8.5%",
  price: 250000,
  availableTokens: 750,
  totalTokens: 1000,
  image: "/assets/Images/premium-office-building-1.png",
};

export default function AssetCard() {
  const asset = mockAsset;

  const progressPercent = (asset.availableTokens / asset.totalTokens) * 100;

  return (
    <div className="w-full max-w-sm rounded-xl shadow-md border border-gray-200 bg-white overflow-hidden">
      {/* Image */}
      <div className="relative w-full aspect-video">
        <img
          src={asset.image}
          alt={asset.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
          {asset.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {asset.title}
        </h3>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400" />
            <span>{asset.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-gray-400" />
            <span>
              Expected ROI:{" "}
              <span className="font-semibold text-gray-800">
                {asset.expectedRoi}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Coins size={16} className="text-gray-400" />
            <span>
              {asset.availableTokens}/{asset.totalTokens} tokens available
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gray-800"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Price */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Price</p>
            <p className="text-xl font-bold text-gray-800">${asset.price.toLocaleString()}</p>
          </div>

          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition">
            Invest
          </button>
        </div>
      </div>
    </div>
  );
}

