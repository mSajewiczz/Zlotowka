import test_photo from "../../img/test-img.png"


export default function AppPresentataion() {
	return (
		<div className="flex flex-col gap-2 p-5 items-start">
			<h2 className="text-3xl">Have real impact for your finance</h2>

			<div className="bg-gray-400 flex gap-2 p-2">
				<div className="flex bg-gray-200 rounded-xl p-2">
					<div>
						<h3>Set your own goals</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
							corrupti eos natus. Dignissimos expedita sint rerum iusto
							sapiente, corrupti ipsum?
						</p>
					</div>

                    <div className="h-50">
                        <img className="h-full" src={test_photo} alt="Test" />
                    </div>
				</div>

                <div className="flex  bg-gray-200 rounded-xl p-2">
					<div className="h-8">
						<h3>Controll your spends</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
							corrupti eos natus. Dignissimos expedita sint rerum iusto
							sapiente, corrupti ipsum?
						</p>
					</div>

                    <div className="h-50">
                        <img className="h-full" src={test_photo} alt="Test" />
                    </div>
				</div>
			</div>
		</div>
	);
}
