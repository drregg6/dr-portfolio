import PropTypes from 'prop-types';

const About = ({ bio }) => {
	return (
		<div className="about">
			<img
				src="https://res.cloudinary.com/duaddi9yp/image/upload/v1775135579/suit-selfie_mzzzif.jpg"
				alt="Dave Regg"
			/>
			<p className="p-blurb">{bio ? bio : 'Hello world!'}</p>
		</div>
	);
};

About.propTypes = {
	bio: PropTypes.string,
};

export default About;
