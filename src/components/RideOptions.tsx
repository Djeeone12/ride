import { Car, CarFront, Truck } from 'lucide-react';

const rideOptions = [
  {
    id: 'economy',
    name: 'Economy',
    icon: Car,
    price: '$12-15',
    time: '3 min',
  },
  {
    id: 'comfort',
    name: 'Comfort',
    icon: CarFront,
    price: '$18-22',
    time: '5 min',
  },
  {
    id: 'xl',
    name: 'XL',
    icon: Truck,
    price: '$25-30',
    time: '8 min',
  },
];

export default function RideOptions() {
  return (
    <div className="bg-white rounded-t-3xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Escoja tu coche</h2>
      <div className="space-y-4">
        {rideOptions.map((option) => (
          <button
            key={option.id}
            className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <option.icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">{option.name}</h3>
                <p className="text-sm text-gray-500">{option.time} away</p>
              </div>
            </div>
            <span className="font-semibold">{option.price}</span>
          </button>
        ))}
      </div>
      <button className="w-full mt-6 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
        Confirma tu Viaje
      </button>
    </div>
  );
}
