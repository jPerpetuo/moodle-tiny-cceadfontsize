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
 * Commands for Tiny CCEAD font size.
 *
 * @module      tiny_cceadfontsize/commands
 * @copyright   2023 Mikko Haiku <mikko.haiku@mediamaisteri.com>
 * @copyright   2026 CCEAD
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {getButtonImage} from 'editor_tiny/utils';
import {get_string as getString} from 'core/str';
import {
    component,
    fontsizeButtonName,
    fontsizeMenuItemName,
    icon,
} from './common';

export const fontSizes = [8, 10, 12, 14, 18, 24, 36];

/**
 * Apply a supported font size to the current TinyMCE selection.
 *
 * TinyMCE's formatter changes only the font-size format. It does not replace an
 * existing style attribute, so colour, weight, and other inline styles remain.
 *
 * @param {TinyMCE.editor} editor The TinyMCE editor instance.
 * @param {number} size The size in points.
 * @returns {boolean} Whether a valid font size was applied.
 */
export const applyFontSize = (editor, size) => {
    if (!fontSizes.includes(size)) {
        return false;
    }

    editor.formatter.apply('fontsize', {value: `${size}pt`});
    return true;
};

/**
 * Get the asynchronous UI registration function.
 *
 * @returns {Promise<function(TinyMCE.editor): void>} UI registration function.
 */
export const getSetup = async() => {
    const [buttonTitle, menuItemTitle, buttonImage] = await Promise.all([
        getString('button_fontsize', component),
        getString('menuitem_fontsize', component),
        getButtonImage('icon', component),
    ]);

    return (editor) => {
        const submenuItems = fontSizes.map((size) => ({
            type: 'menuitem',
            text: `${size} pt`,
            onAction: () => applyFontSize(editor, size),
        }));

        editor.ui.registry.addIcon(icon, buttonImage.html);

        // Register exactly one control for each configured TinyMCE location.
        editor.ui.registry.addMenuButton(fontsizeButtonName, {
            icon,
            tooltip: buttonTitle,
            fetch: (callback) => callback(submenuItems),
        });

        editor.ui.registry.addNestedMenuItem(fontsizeMenuItemName, {
            icon,
            text: menuItemTitle,
            getSubmenuItems: () => submenuItems,
        });
    };
};
