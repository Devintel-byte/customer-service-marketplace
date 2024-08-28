function Loader() {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="animate-spin w-20 h-20 border-[4px] border-green-500 rounded-[50%] inline-block relative after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[50%] after:border-[4px] after:border-b-green-500 after:border-transparent after:w-[46px] after:h-[46px]"></div>
		</div>
	);
}

export default Loader;
