import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex h-24 w-full flex-col items-center bg-white">
      <div className="flex h-24 w-full max-w-5xl items-center justify-between px-8">
        <Image
          src="/waseda-place-logo.png"
          alt="Waseda Place Logo Logo"
          width={220}
          height={36}
          priority
        />
        <div className="flex items-center space-x-16">
          <NavItem text="Main" isActive={false} />
          <NavItem text="About" isActive={false} />
          <div className="bg-primary rounded-[16px] px-6 py-2">
            <p className="text-md text-black">Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem(props: { text: string; isActive: boolean }) {
  return (
    <div className="flex h-5 items-center border-y border-black px-4">
      <p className="text-xs text-black">{props.text}</p>
    </div>
  );
}
