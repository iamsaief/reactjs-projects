import { useState } from 'react';
import dummyData from './data';
import TLCardDatatable from './TicketListCard/TLCardDatatable';
import TLCardSupportForum from './TicketListCard/TLCardSupportForum';

function App() {
	const [data, setData] = useState(dummyData);

	return (
		<div className="tl-py-60 tl-px-16">
			<div className="tl-container">
				<TLCardSupportForum />

				<TLCardDatatable data={data} />
			</div>
		</div>
	);
}

export default App;
