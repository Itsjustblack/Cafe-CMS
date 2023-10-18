import PageContainer from "../components/PageContainer";
import SearchBar from "../components/Search";
import ShopPreview from "../components/ShopPreview";

const Home = () => {
	return (
		<PageContainer className="bg-[#f8f8f8] px-10">
			<header className="pt-10 flex flex-row justify-between">
				<div>
					<h1 className="font-bitter font-semibold tracking-wide text-[26px] text-[##0d0d0d]">Welcome Garry</h1>
					<p className="text-sm tracking-wide font-medium text-[#919191]">Discover what you need easily</p>
				</div>
				<SearchBar />
			</header>
			<div className="mt-10 flex justify-around flex-wrap">
				<ShopPreview
					name="Bashan"
					image="/assets/food.jpg"
					path="/shop"
				/>
				<ShopPreview
					name="Shalom"
					image="/assets/food2.jpg"
					path="/"
				/>
				<ShopPreview
					name="Hephzibah"
					image="/assets/food3.jpg"
					path="/"
				/>
			</div>
		</PageContainer>
	);
};

export default Home;
