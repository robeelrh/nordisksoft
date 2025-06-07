interface StatCardProps {
  label: string;
  title: string;
  description: string;
}

export default function StatCard({ label, title, description }: StatCardProps) {
  return (
    <div className="w-full flex flex-col gap-5 font-inter">
      <p className="font-semibold text-7xl">{label}</p>
      <div className="w-full h-[1px] bg-black" />
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-[#11111180] text-md font-medium">{description}</p>
      </div>
    </div>
  );
}
