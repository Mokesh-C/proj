
import Image from "next/image";

export default function Home() {
    return (
        <main>

            <div>
                <Image
                    src="/bg.jpg"
                    alt="Sample Image"
                    width={612}
                    height={334}
                    layout="responsive"
                    style={{ maxWidth: '100%', maxHeight: '80vh', filter: 'blur(5px)' }}
                />
                <h1 className="hero">Welcome to Book My Hall Website</h1>
            </div>
        </main >
    );
}
