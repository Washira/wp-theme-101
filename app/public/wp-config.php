<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'i>Zmes2 p/Nsa+Pv)dp9uM8QcnAT]FgirHA0lX(a!5sT4/(GdUd@v!4<&l3yZ,a[' );
define( 'SECURE_AUTH_KEY',   'YZxwBmOm[%|c7TJuXK5`,!C:a-0ZRg]>S5{&&k|[Cd[(iNN/RVVFKB2mt,>>QAPI' );
define( 'LOGGED_IN_KEY',     'P0(M`vg3.r1P?vaey~?Am)a^n(FfI&J#7bID~F-m5]~-1_?Nw_XRqwCT&kHsT5Ed' );
define( 'NONCE_KEY',         '72j^b=>?XWMq(nnR>~iV<Goeh_O`}HB!{}=Cr%l#b^4`:.4`X)b;f8s09vrj9u]R' );
define( 'AUTH_SALT',         'N#bBgqZYI~*5?[CWhITLMl:`^Os(=cFo9% qN%mlj-GtI6=2yUt.u#e#3AC::(RH' );
define( 'SECURE_AUTH_SALT',  'F-j7CMX$#Fe;$SRi-dgylZ$0rs@*~Q{?sR*Q~W2[6G;af6X!f-~,($xsLQQlKEsT' );
define( 'LOGGED_IN_SALT',    'yP6E=r3Rb]?grTmW;)c=F)?h,</lWBE%Ad?+m:fm9;9O5DV(0N]zx+xp5%op|r!&' );
define( 'NONCE_SALT',        'fY* ((l(d}eRad$U0=J<4-]?@F74;alIT/pRA=&HFc8BjN@1ts<<=Eg)WdA2wEIK' );
define( 'WP_CACHE_KEY_SALT', 'b]33DiQ/Kr7scMzE3=3B?rAMp-RehRSmsJ){tN7*FS_q5n=+tN(YnRkMpu2FB,;C' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
