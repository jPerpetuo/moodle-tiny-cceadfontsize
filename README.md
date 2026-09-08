# Tiny CCEAD font size

This Moodle TinyMCE plugin offers the font sizes 8, 10, 12, 14, 18, 24, and 36 pt. It is available to users with the `tiny/cceadfontsize:use` capability and applies a selected size through TinyMCE's `fontsize` formatter. The formatter acts on the current text selection and retains other inline formatting.

## Installation

Place this directory at `<moodleroot>/lib/editor/tiny/plugins/cceadfontsize`, then complete the Moodle upgrade as an administrator. Enable the plugin and place its control in the Tiny editor toolbar or Format menu through the Tiny editor administration settings.

The repository contains AMD source modules. Generate the AMD build artifacts with Moodle's standard Grunt workflow before using a source checkout in an installation.

## Development checks

The GitHub Actions workflow runs Moodle Plugin CI on Moodle 5.1 and 5.2 with PostgreSQL and MariaDB. It runs PHP lint, Code Checker, PHPDoc validation, upgrade savepoint validation, Grunt, and PHPUnit. The JavaScript regression tests document valid sizes and prevent an undefined size from reaching TinyMCE's formatter when run by the Moodle frontend test runner.

## License

This plugin is licensed under the GNU General Public License, version 3 or later. It is derived from `tiny_fontsize`, whose source is licensed under the same terms.
