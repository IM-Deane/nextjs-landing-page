import React from "react";
import { FaStar } from "react-icons/fa";

// Star rating for clients
const Rating = ({ rating }) => {
	const totalRating = [];

	// Calc star rating
	for (let i = 0; i < 5; i++) {
		// Full star
		if (i < rating) {
			totalRating.push(
				<li className="star" key={i}>
					<FaStar />
				</li>
			);
		} else {
			// Half star
			totalRating.push(
				<li className="star-o" key={i}>
					<FaStar />
				</li>
			);
		}
	}

	return (
		<div className="rating">
			<ul>{totalRating}</ul>
		</div>
	);
};

export default Rating;
