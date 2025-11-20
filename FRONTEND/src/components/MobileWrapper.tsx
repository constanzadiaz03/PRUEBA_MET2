export default function MobileWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center bg-gray-200 min-h-screen">
      <div className="bg-white w-[390px] min-h-screen shadow-lg overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
