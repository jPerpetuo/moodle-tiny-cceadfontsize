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
// along with Moodle. If not, see <http://www.gnu.org/licenses/>.

/**
 * TinyMCE options for Tiny CCEAD font size.
 *
 * @module      tiny_cceadfontsize/options
 * @copyright   2026 CCEAD
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getPluginOptionName} from 'editor_tiny/options';
import {pluginName} from './common';

const sizes = getPluginOptionName(pluginName, 'sizes');

export const register = (editor) => editor.options.register(sizes, {
    processor: 'Array',
    'default': [],
});

export const getFontSizes = (editor) => {
    const values = editor.options.get(sizes);
    if (!Array.isArray(values)) {
        return [];
    }
    return [...new Set(values.map((size) => Number(size)).filter((size) => Number.isInteger(size) && size > 0))];
};
