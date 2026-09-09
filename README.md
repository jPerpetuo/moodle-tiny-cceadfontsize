# Tiny CCEAD font size

This Moodle TinyMCE plugin offers the font sizes 8, 10, 12, 14, 18, 24, and 36 pt. It is available to users with the `tiny/cceadfontsize:use` capability and applies a selected size through TinyMCE's `fontsize` formatter. The formatter acts on the current text selection and retains other inline formatting. It is independent of `tiny_cceadfontfamily` and can be installed and used alone.

## Installation

Place this directory at `<moodleroot>/lib/editor/tiny/plugins/cceadfontsize`, then complete the Moodle upgrade as an administrator. Enable the plugin and place its control in the Tiny editor toolbar or Format menu through the Tiny editor administration settings.

The repository contains AMD source modules. Generate the AMD build artifacts with Moodle's standard Grunt workflow before using a source checkout in an installation.

## Requirements and compatibility

The plugin requires Moodle 5.1 and declares support for Moodle 5.1 and 5.2 (`$plugin->requires = 2025092600`). The CI matrix covers Moodle 5.1 with PHP 8.2 and 8.4, Moodle 5.2 with PHP 8.3 and 8.4, PostgreSQL 16, and MariaDB 11. The plugin does not require an external service, Composer package, database table, or companion plugin.

## Configuration and use

Assign the `tiny/cceadfontsize:use` capability in the relevant context, add the `Font size` control to the Tiny editor toolbar or Format menu, select text, and choose one of the listed sizes. The plugin stores no personal data and provides no site-level font-size setting.

## Limitations and support

The plugin changes the HTML formatting of the current TinyMCE selection; it does not install fonts or guarantee a particular rendering on the user's device. Partial selections, selections crossing inline elements, undo/redo, and persistence are covered by the companion integration suite when both CCEAD plugins are enabled in CI. Report reproducible issues with the Moodle version, PHP version, browser, editor HTML, and the exact configured capability.

Use the [GitHub issue tracker](https://github.com/jPerpetuo/moodle-tiny-cceadfontsize/issues) for reproducible bug reports and feature requests.

## Development checks

The GitHub Actions workflow runs Moodle Plugin CI on Moodle 5.1 and 5.2 with PostgreSQL and MariaDB. It runs PHP lint, Code Checker, PHPDoc validation, upgrade savepoint validation, Grunt, and PHPUnit. The JavaScript regression tests document valid sizes and prevent an undefined size from reaching TinyMCE's formatter when run by the Moodle frontend test runner.

## License

This plugin is licensed under the GNU General Public License, version 3 or later; see `LICENSE`. It is derived from Moodle's `tiny_fontsize` plugin, whose source is GPL-licensed. Copyright and attribution notices for the original and CCEAD contributions are retained in the source files.
