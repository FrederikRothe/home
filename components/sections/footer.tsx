import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="py-8 w-full mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="font-bold text-foreground">
                    &copy; {new Date().getFullYear()} How to reach me.
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                    <a
                        href="https://www.linkedin.com/in/frederik-rothe/"
                        className="text-foreground hover:text-primary transition"
                    >
                        <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            className="h-6 w-6"
                            width={64}
                            height={64}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}
