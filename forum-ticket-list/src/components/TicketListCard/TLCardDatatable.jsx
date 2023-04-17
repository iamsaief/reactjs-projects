import React, { useEffect, useState } from 'react';
import Datatable from '../Datatable/Datatable';

export default function TLCardDatatable({ data }) {
	const [q, setQ] = useState('');
	const [filter, setFilter] = useState('');

	const filterItems = ['all', ...new Set(data.map(({ status }) => status))];

	const search = (rows) => {
		if (filter) {
			if (filter !== 'all') {
				return rows.filter((row) => row.status.toLowerCase().indexOf(filter.toLocaleLowerCase()) > -1);
			}
		}

		return rows.filter(
			(row) =>
				row.ticket.name.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1 ||
				row.status.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1
		);
	};

	return (
		<div className="tl-card tl-card--datatable tl-mb-40">
			<div className="tl-card__header tl-card__header--flex-between">
				<div className="tl-card__header--title tl-fw-7">My Tickets</div>

				<div className="tl-card__header--filter-search">
					<div>
						<select
							name="tl-tickets-category-status"
							className="tl-form-control"
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
						>
							{filterItems.map((option) => (
								<option value={option} key={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div className="tl-form-group--radius tl-form-group--has-icon">
						<input
							type="search"
							name="tl-support-forum-search"
							className="tl-form-control"
							placeholder="Search Tickets"
							value={q}
							onChange={(e) => setQ(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="tl-card__body">
				<Datatable data={search(data)} query={q} />
			</div>
		</div>
	);
}
