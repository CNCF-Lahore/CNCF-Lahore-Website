import {
	motion,
	useAnimation,
	useViewportScroll,
	Variants,
} from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Nav = styled(motion.div)`
	z-index: 999;
	position: fixed;
	top: 0;
	width: 100%;
	height: 80px;
	font-size: 14px;
	padding: 20px 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${(props) => props.theme.white.lighter};
`;
const Col = styled(motion.div)`
	display: flex;
	align-items: center;
`;
const Logo = styled(motion.svg)`
	margin-right: 30px;
	width: 200px;
	height: 180px;
	fill: ${(props) => props.theme.blue.dark};
`;
const ITems = styled(motion.ul)`
	display: flex;
	align-items: center;
`;
const Item = styled(motion.li)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-right: 20px;
	position: relative;
	color: ${(props) => props.theme.white.darker};
	&:hover {
		color: ${(props) => props.theme.white.lighter};
	}
	transition: color 0.3s ease-in-out;
`;

const Circle = styled(motion.div)`
	position: absolute;
	bottom: -10px;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.blue.dark};
`;

const Search = styled(motion.form)`
	position: relative;
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.white.lighter};
	svg {
		height: 25px;
	}
`;
const Input = styled(motion.input)`
	transform-origin: right center;
	z-index: -1;
	position: absolute;
	right: 0;
	margin: auto, 0;
	padding: 5px 10px;
	padding-left: 40px;
	font-size: 16px;
	color: ${(props) => props.theme.white.lighter};
	background-color: rgba(0, 0, 0, 0.8);
	border: 0.1px solid ${(props) => props.theme.white.lighter};
`;

const ProfileBtn = styled(motion.div)`
	cursor: pointer;
	margin-left: 50px;
	width: 50px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.white.lighter};
	a {
		height: 35px;
		img {
			border-radius: 5px;
			width: 35px;
			height: 35px;
		}
	}
	span {
		margin-left: 15px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 5px 5px 0 5px;
		border-color: #fff transparent transparent transparent;
	}
`;

const ProfileMenu = styled(motion.div)`
	position: absolute;
	top: 40px;
	right: 42px;
	section {
		position: relative;
		top: 30px;
		width: 150px;
		height: 220px;
		background-color: rgba(0, 0, 0, 0.8);
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		padding: 10px 15px;
		a {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			img {
				border-radius: 5px;
				width: 35px;
				height: 35px;
			}
			span {
				font-size: 15px;
				font-weight: 600;
				margin-left: 15px;
			}
		}
	}
`;

const navVariants: Variants = {
	top: {
		background:
			"linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))",
		backgroundColor: "rgba(0,0,0,0)",
	},
	scroll: {
		background: "linear-gradient(0)",
		backgroundColor: "rgba(0,0,0,1)",
	},
};

const profileArrowVariants: Variants = {
	initial: { rotateZ: 0 },
	animate: (profileHovering: boolean) => ({
		rotateZ: profileHovering ? 180 : 0,
	}),
	exit: { rotateZ: 0 },
};

interface IForm {
	keyword: string;
}

function Header() {
	const [profileHovering, setProfileHovering] = useState(false);
	const homeMatch = useMatch("/");
	const tvMatch = useMatch("/tvshows");
	const favMatch = useMatch("/favs");
	const navAnimation = useAnimation();
	const inputAnimation = useAnimation();
	const { scrollY } = useViewportScroll();
	const { register, handleSubmit, setFocus } = useForm<IForm>();
	const [searchOpen, setSearchOpen] = useState(false);
	const navigate = useNavigate();
	const onValid = ({ keyword }: IForm) => {
		navigate(`/search?keyword=${keyword}`);
	};
	const toggleSearch = () => {
		setFocus("keyword");
		searchOpen
			? inputAnimation.start({
					scaleX: 0,
			  })
			: inputAnimation.start({
					scaleX: 1,
			  });
		setSearchOpen((prev) => !prev);
	};
	const onProfileHoverStart = () => {
		setProfileHovering(true);
	};
	const onProfileHoverEnd = () => {
		setProfileHovering(false);
	};

	useEffect(() => {
		scrollY.onChange(() =>
			scrollY.get() > 80
				? navAnimation.start("scroll")
				: navAnimation.start("top")
		);
	}, [scrollY, navAnimation]);
	//page enter scroll top
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<Nav variants={navVariants} initial="top" animate={navAnimation}>
			<Col>
				<Link to="/">
				<Logo
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 276.742"
>
    <motion.g transform="translate(0.000000,313.000000) scale(0.100000,-0.100000)">
        <motion.path d="M820 1921 c-291 -134 -541 -262 -577 -295 -70 -63 -86 -106 -168 -471 -84 -373 -86 -393 -42 -488 31 -68 429 -571 480 -608 68 -50 121 -59 324 -59 l183 0 0 314 c0 262 -2 315 -14 319 -10 4 -22 -10 -37 -41 -31 -67 -68 -180 -74 -226 -3 -22 -10 -45 -15 -50 -6 -6 -10 -17 -10 -25 0 -22 -41 -102 -49 -96 -7 4 -6 48 3 120 2 17 11 51 19 76 31 92 48 279 25 279 -7 0 -22 7 -32 15 -19 14 -19 15 3 23 21 8 21 9 -16 35 -37 26 -38 27 -41 7 -3 -19 -5 -18 -29 9 l-25 29 -57 -15 c-81 -20 -192 -63 -220 -85 -13 -10 -33 -18 -45 -18 -12 0 -26 -4 -32 -9 -15 -14 -94 -24 -94 -12 0 6 3 11 8 11 4 0 20 11 36 25 16 14 33 25 38 25 6 0 21 9 35 20 14 11 33 20 42 20 40 0 256 134 245 152 -3 5 -7 20 -9 34 -2 18 2 24 11 20 11 -4 14 5 14 36 0 34 -2 39 -15 28 -12 -10 -14 -7 -10 19 2 17 6 34 9 39 9 15 -147 121 -254 171 -67 31 -130 78 -130 97 0 19 77 -7 200 -68 63 -31 141 -64 173 -73 l59 -17 28 27 c27 26 28 26 32 7 3 -20 5 -19 38 8 35 28 35 29 12 37 -22 9 -22 9 12 23 36 14 36 14 36 76 0 73 -19 214 -31 229 -12 16 -20 173 -9 180 8 5 42 -55 45 -80 1 -5 6 -26 12 -45 6 -19 11 -48 12 -65 2 -46 62 -226 83 -247 16 -16 18 -38 18 -230 l1 -213 69 -47 c77 -53 90 -78 90 -176 l0 -52 218 2 217 3 3 275 2 276 -28 27 -28 27 -27 -26 c-25 -23 -27 -30 -27 -114 l0 -90 -40 0 -39 0 6 48 c9 75 -19 127 -108 200 l-73 60 -29 -24 c-34 -29 -39 -29 -54 -5 -7 11 -44 45 -83 76 l-70 56 0 279 0 280 -47 0 c-36 0 -74 -12 -153 -49z m109 -56 c-20 -7 -54 -24 -75 -37 -21 -14 -137 -78 -257 -143 -231 -125 -277 -161 -297 -235 -25 -87 -130 -589 -130 -615 1 -60 31 -108 219 -359 233 -310 219 -300 441 -317 80 -6 146 -12 148 -14 5 -4 -182 -18 -259 -18 -55 -1 -77 4 -133 32 -54 26 -79 48 -139 118 -323 384 -357 433 -372 533 -7 52 2 103 82 435 59 248 82 306 146 360 57 49 577 275 632 274 l30 0 -36 -14z"/>
    </motion.g>
</Logo>
				</Link>
				<ITems>
					<Item>
						<Link to="/">
							Home {homeMatch && <Circle layoutId="circle" />}
						</Link>
					</Item>
					<Item>
						<Link to="/tvshows">
							TV Shows {tvMatch && <Circle layoutId="circle" />}
						</Link>
					</Item>
					<Item>
						<Link to="/favs">
							My List
							{favMatch && <Circle layoutId="circle" />}
						</Link>
					</Item>
				</ITems>
			</Col>
			<Col>
				<Search onSubmit={handleSubmit(onValid)} onClick={toggleSearch}>
					<motion.svg
						style={{ cursor: "pointer" }}
						animate={{
							x: searchOpen ? -185 : 0,
						}}
						transition={{ type: "tween" }}
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"
						></path>
					</motion.svg>
					<Input
						{...register("keyword", {
							required: true,
							minLength: 2,
							onBlur: () => searchOpen && toggleSearch(),
						})}
						animate={inputAnimation}
						initial={{ scaleX: 0 }}
						transition={{ type: "tween" }}
						placeholder="Search for Movie or TVShows"
						autoComplete="off"
					/>
				</Search>
				<ProfileBtn
					custom={profileHovering}
					onHoverStart={onProfileHoverStart}
					onHoverEnd={onProfileHoverEnd}
				>
					<a
						href="https://github.com/geonya"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://avatars.githubusercontent.com/u/39020648?v=4"
							alt="profile-avatar"
						/>
					</a>
					<motion.span
						transition={{ type: "tween" }}
						custom={profileHovering}
						variants={profileArrowVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						role="presentation"
					></motion.span>
				</ProfileBtn>
				{profileHovering ? (
					<ProfileMenu
						onHoverStart={onProfileHoverStart}
						onHoverEnd={onProfileHoverEnd}
					>
						<section>
							<div>
								<a
									href="https://github.com/geonya"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://avatars.githubusercontent.com/u/39020648?v=4"
										alt="profile-avatar"
									/>

									<span>Geony</span>
								</a>
							</div>
							<div>
								<a
									href="https://github.com/geonya"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRPKfs177BiQ9YtqkOYpH3JplmNJ4TsojR5D_rNvQtAPCPBxGAeLaWDMJpaPTA-D-5uXJ6pkCbeMjTr7h5HAO_4.png?r=02c"
										alt="profile-avatar"
									/>

									<span>Bora</span>
								</a>
							</div>
							<div>
								<a
									href="https://nomadcoders.co"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://avatars.githubusercontent.com/u/3612017?v=4"
										alt="profile-avatar"
									/>
									<span>Nico</span>
								</a>
							</div>
							<div>
								<a
									href="https://nomadcoders.co"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="https://d1telmomo28umc.cloudfront.net/media/public/avatars/lynn-1608029862.jpg"
										alt="profile-avatar"
									/>
									<span>Lynn</span>
								</a>
							</div>
						</section>
					</ProfileMenu>
				) : null}
			</Col>
		</Nav>
	);
}

export default Header;