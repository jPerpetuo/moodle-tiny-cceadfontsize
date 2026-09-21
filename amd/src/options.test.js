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
import {getFontSizes} from 'tiny_cceadfontsize/options';

describe('Tiny CCEAD font size options', () => {
    it('normalises numeric values received from the TinyMCE option processor', () => {
        const editor = {options: {get: () => [8, '14', 14, 0, 'invalid']}};
        expect(getFontSizes(editor)).toEqual([8, 14]);
    });

    it('returns an empty list for an invalid option value', () => {
        const editor = {options: {get: () => null}};
        expect(getFontSizes(editor)).toEqual([]);
    });
});
