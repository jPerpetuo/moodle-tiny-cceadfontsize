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
 * Regression tests for Tiny CCEAD font size commands.
 *
 * @module      tiny_cceadfontsize/commands
 * @copyright   2026 CCEAD
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/* eslint-env jest */

import {applyFontSize, fontSizes} from 'tiny_cceadfontsize/commands';

describe('Tiny CCEAD font size commands', () => {
    it('applies a valid size using TinyMCE formatter', () => {
        const apply = jest.fn();
        const editor = {formatter: {apply}};

        expect(applyFontSize(editor, 14)).toBe(true);
        expect(apply).toHaveBeenCalledWith('fontsize', {value: '14pt'});
    });

    it('does not apply an undefined or unsupported size', () => {
        const apply = jest.fn();
        const editor = {formatter: {apply}};

        expect(applyFontSize(editor)).toBe(false);
        expect(applyFontSize(editor, 13)).toBe(false);
        expect(apply).not.toHaveBeenCalled();
    });

    it('keeps the documented set of selectable font sizes', () => {
        expect(fontSizes).toEqual([8, 10, 12, 14, 18, 24, 36]);
    });
});
