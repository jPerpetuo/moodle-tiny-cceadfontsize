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

/* eslint-env jest */
import {applyFontSize} from 'tiny_cceadfontsize/commands';

describe('Tiny CCEAD font size commands', () => {
    it('applies a valid size using TinyMCE formatter', () => {
        const apply = jest.fn();
        const editor = {formatter: {apply}};
        expect(applyFontSize(editor, 14, [8, 14])).toBe(true);
        expect(apply).toHaveBeenCalledWith('fontsize', {value: '14pt'});
    });

    it('does not apply an unsupported size', () => {
        const apply = jest.fn();
        const editor = {formatter: {apply}};
        expect(applyFontSize(editor, 13, [8, 14])).toBe(false);
        expect(apply).not.toHaveBeenCalled();
    });

    it('does not apply a size when the configured list is empty', () => {
        const apply = jest.fn();
        const editor = {formatter: {apply}};
        expect(applyFontSize(editor, 14, [])).toBe(false);
        expect(apply).not.toHaveBeenCalled();
    });
});
