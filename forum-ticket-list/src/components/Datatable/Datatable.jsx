import React from 'react';
import NotFound from '../NotFound/NotFound';

export default function Datatable({ data, query }) {
	const columns = data[0] && Object.keys(data[0]);

	return (
		<>
			{data.length > 0 ? (
				<table className="tl-table tl-table-responsive">
					<thead>
						<tr>{columns.map((th) => th !== 'ticketId' && <th key={`th-${Math.random()}`}>{th}</th>)}</tr>
					</thead>
					<tbody>
						{data.map((row) => {
							const { ticketId, ticket, status, createdTime, replies } = row;

							return (
								<tr key={`tr-${ticketId}`}>
									{ticket && (
										<td data-th="Tickets">
											<div className="tl-table__tickets">
												<a href="#">{ticket.name}</a>
												<p>{ticket.cat}</p>
											</div>
										</td>
									)}
									{status && (
										<td data-th="Status">
											<div className="tl-table__status">
												<span className={`tl-status tl-status-${status}`}>{status}</span>
											</div>
										</td>
									)}
									{createdTime && (
										<td data-th="Created At">
											<div className="tl-table__default-text">
												<span>{createdTime}</span>
											</div>
										</td>
									)}
									{replies && (
										<td data-th="Replies">
											<div className="tl-table__replies">
												<div className="tl-table__replies--avatar">
													<img
														src={replies.userAvatar}
														alt="avatar"
														style={{ width: '25px', height: '25px', borderRadius: '50%' }}
													/>
													<div className="tl-table__default-text">{replies.username}</div>
												</div>
											</div>
										</td>
									)}
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<NotFound query={query} />
			)}
		</>
	);
}
