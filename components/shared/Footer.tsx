import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex md:flex-row flex-col gap-5 p-5 text-center">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="logos"
          />
        </Link>
        <h1 className="font-light">
          Made with 💜 by
          <Link
            href="https://github.com/murtazaghulam99"
            className="underline hover:no-underline hover:font-bold pl-1"
            title="Github"
            target="_blank"
          >
            Ghulam Murtaza
          </Link>
        </h1>
        <p>© 2024 Meet Mate. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
