<!doctype html>

  <html class="no-js"  <?php language_attributes(); ?>>

	<head>
		<meta charset="utf-8">
		
		<!-- Force IE to use the latest rendering engine available -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<!-- Mobile Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta class="foundation-mq">
		
		<!-- If Site Icon isn't set in customizer -->
		<?php if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ) { ?>
			<!-- Icons & Favicons -->
			<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
			<link href="<?php echo get_template_directory_uri(); ?>/assets/images/apple-icon-touch.png" rel="apple-touch-icon" />
			<!--[if IE]>
				<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
			<![endif]-->
			<meta name="msapplication-TileColor" content="#f01d4f">
			<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/assets/images/win8-tile-icon.png">
	    	<meta name="theme-color" content="#121212">
	    <?php } ?>

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<link rel="stylesheet" id="google-font-Raleway-css" href="http://fonts.googleapis.com/css?family=Raleway%3A600%2C400%2C200" type="text/css" media="all">
		<link href="https://fonts.googleapis.com/css?family=Oswald:400,700" rel="stylesheet">

		<?php wp_head(); ?>

		<!-- Drop Google Analytics here -->
		<!-- end analytics -->

	</head>
	
	<!-- Uncomment this line if using the Off-Canvas Menu --> 
		
	<body <?php body_class(); ?>>

	<div id="nav-wrapper">
		<section id="nav" class="container large-12 columns">
			<a href="/"><div class="nav-logo x down" data-size="big"><span>JC</span></div></a>
			<nav>
				<ul>
					<li><a href="portfolio">Portfolio</a></li>
					<li><a href="resume">About</a></li>
					<li><a href="blog">Blog</a></li>
					<li><a href="contact">Contact</a></li>
				</ul>
				<a class="navicon-button x down" data-size="big"><div class="navicon"></div></a>
			</nav>
		</section>
	</div>