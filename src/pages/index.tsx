import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Courses from "@/sections/Courses";
import Features from "@/sections/Features";
import Works from "@/sections/Works";
import Testimonial from "@/sections/Testimonial";
import Banner from "@/sections/Banner";
import Footer from "@/components/Footer";
import { Authenticator, useTheme, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Picture1 from "./assests/images/2.jpeg";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

// const components = {
// 	Header() {
// 		const { tokens } = useTheme();

// 		return (
// 			<View padding={tokens.space.large}>
// 				<div className='flex justify-center'>
// 					<Image
// 						alt='Amplify logo'
// 						src='/logo.png'
// 						height={144} // Desired size with correct aspect ratio
// 						width={244}
// 					/>
// 				</div>
// 			</View>
// 		);
// 	},
// };

function Home() {
	// const router = useRouter();
	// useEffect(() => {
	// 	if (!router.isReady) return;

	// 	// console.log(router);
	// }, [router.isReady]);
	return (
		<>
			
				<Navbar />
				<Hero />
				<About />
				<Courses />
				<Features />
				<Works />
				<Testimonial />
				<Banner />
				{/* <Footer /> */}
			
		</>
	);
}

export const getServerSideProps: GetStaticProps = async (context) => {
	// to test subdomain hit the testdomain.localhost:3000
	const host = context?.req?.headers?.host as string;
	if (host && host?.includes(".")) {
		const part = host.split(".")?.[0];
		console.log("part: ", part);
		return {
			redirect: {
				permanent: true,
				destination: "/" + part,
			},
		};
	}

	return {
		props: {}, // will be passed to the page component as props
	};
};

export default Home;
