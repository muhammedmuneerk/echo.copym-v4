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
    <div className="w-full max-w-sm rounded-2xl shadow-lg border border-gray-100 bg-white overflow-hidden transition hover:shadow-xl hover:border-gray-300">
      {/* Image */}
      <div className="relative w-full aspect-video">
        <img
          src={asset.image}
          alt={asset.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-white text-[11px] px-3 py-1 rounded-full shadow-md font-semibold uppercase">
          {asset.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold text-gray-900">{asset.title}</h3>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400" />
            <span>{asset.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-gray-400" />
            <span>
              Expected ROI:{" "}
              <span className="font-semibold text-gray-900">
                {asset.expectedRoi}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Coins size={16} className="text-gray-400" />
            <span className="text-gray-700">
              {asset.availableTokens}/{asset.totalTokens} tokens available
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 uppercase font-medium">
              Price
            </p>
            <p className="text-xl font-bold text-gray-900">
              ${asset.price.toLocaleString()}
            </p>
          </div>

          <button className="px-5 py-2.5 text-sm font-semibold text-white btn-gradient">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  );
}
