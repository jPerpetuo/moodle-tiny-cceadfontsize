// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * TinyMCE configuration for Tiny CCEAD font size.
 *
 * @module      tiny_cceadfontsize/configuration
 * @copyright   2023 Mikko Haiku <mikko.haiku@mediamaisteri.com>
 * @copyright   2026 CCEAD
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {addMenubarItem, addToolbarButtons} from 'editor_tiny/utils';
import {fontsizeButtonName, fontsizeMenuItemName} from './common';

/**
 * Configure the toolbar and menu locations offered by this plugin.
 *
 * @param {object} instanceConfig TinyMCE instance configuration.
 * @returns {object} Plugin configuration additions.
 */
export const configure = (instanceConfig) => ({
    toolbar: addToolbarButtons(instanceConfig.toolbar, 'formatting', [fontsizeButtonName]),
    menu: addMenubarItem(instanceConfig.menu, 'format', fontsizeMenuItemName),
});
