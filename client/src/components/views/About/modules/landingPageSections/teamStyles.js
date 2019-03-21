import { cardTitle, title } from '../mkr';
import imagesStyle from '../imageStyles';

const teamStyle = {
	section: {
		padding: '70px 0',
		textAlign: 'center'
	},
	title: {
		...title,
		marginBottom: '1rem',
		marginTop: '30px',
		minHeight: '32px',
		textDecoration: 'none'
	},
	...imagesStyle,
	itemGrid: {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	cardTitle,
	smallTitle: {
		color: '#6c757d',
		fontWeight: 400
	},
	description: {
		color: 'rgba(88,88,88,0.88)'
	},
	justifyCenter: {
		justifyContent: 'center !important'
	},
	socials: {
		marginTop: '0',
		width: '100%',
		transform: 'none',
		left: '0',
		top: '0',
		height: '100%',
		lineHeight: '41px',
		fontSize: '20px',
		color: 'rgba(88,88,88,0.88)'
	},
	margin5: {
		margin: '5px'
	}
};

export default teamStyle;