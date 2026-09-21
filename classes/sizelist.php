<?php
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
 * Font-size list normalisation for Tiny CCEAD.
 *
 * @package     tiny_cceadfontsize
 * @copyright   2026 CCEAD
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace tiny_cceadfontsize;

/**
 * Normalises the administrator supplied font-size list.
 */
final class sizelist {
    /**
     * Return the built-in defaults.
     *
     * @return array<int, int>
     */
    public static function defaults(): array {
        return [8, 10, 12, 14, 18, 24, 36];
    }

    /**
     * Split on line endings, keep positive numeric point sizes, and remove duplicates.
     *
     * @param string $value Raw setting value.
     * @return array<int, int> Normalised sizes in points.
     */
    public static function normalise(string $value): array {
        $entries = preg_split('/\r\n|\r|\n/', $value) ?: [];
        $sizes = [];
        foreach ($entries as $entry) {
            $entry = trim($entry);
            if ($entry === '' || !preg_match('/^\d+$/', $entry)) {
                continue;
            }
            $size = (int)$entry;
            if ($size > 0 && $size <= 999) {
                $sizes[] = $size;
            }
        }
        return array_values(array_unique($sizes));
    }
}
