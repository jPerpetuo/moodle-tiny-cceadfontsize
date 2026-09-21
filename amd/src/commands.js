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

import {getButtonImage} from 'editor_tiny/utils';
import {get_string as getString} from 'core/str';
import {getFontSizes} from './options';
import {component, fontsizeButtonName, fontsizeMenuItemName, icon} from './common';

export const applyFontSize = (editor, size, configuredSizes) => {
    if (!Array.isArray(configuredSizes) || !configuredSizes.includes(size)) {
        return false;
    }
    editor.formatter.apply('fontsize', {value: `${size}pt`});
    return true;
};

export const getSetup = async() => {
    const [buttonTitle, menuItemTitle, buttonImage] = await Promise.all([
        getString('button_fontsize', component),
        getString('menuitem_fontsize', component),
        getButtonImage('icon', component),
    ]);

    return (editor) => {
        const fontSizes = getFontSizes(editor);
        if (!fontSizes.length) {
            return;
        }
        const submenuItems = fontSizes.map((size) => ({
            type: 'menuitem',
            text: `${size} pt`,
            onAction: () => applyFontSize(editor, size, fontSizes),
        }));

        editor.ui.registry.addIcon(icon, buttonImage.html);
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
