<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

declare(strict_types=1);

namespace tiny_cceadfontsize;

/**
 * Tests for configured font-size lists.
 *
 * @package     tiny_cceadfontsize
 * @copyright   2026 CCEAD
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
final class sizelist_test extends advanced_testcase {
    public function test_normalise_filters_invalid_and_duplicate_values(): void {
        $this->assertSame([8, 14, 36], sizelist::normalise("8
invalid
14
14
0
1000
36"));
    }

    public function test_defaults_match_the_initial_configuration(): void {
        $this->assertSame([8, 10, 12, 14, 18, 24, 36], sizelist::defaults());
    }
}
