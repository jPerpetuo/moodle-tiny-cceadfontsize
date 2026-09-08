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

declare(strict_types=1);

namespace tiny_cceadfontsize;

use advanced_testcase;

/**
 * Unit tests for Tiny CCEAD font size plugin information.
 *
 * @package     tiny_cceadfontsize
 * @copyright   2026 CCEAD
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
#[\PHPUnit\Framework\Attributes\CoversClass(plugininfo::class)]
final class plugininfo_test extends advanced_testcase {
    /**
     * Test that the plugin is shown only to users with its capability.
     *
     * @return void
     */
    public function test_is_enabled_requires_capability(): void {
        $this->resetAfterTest(true);
        $generator = $this->getDataGenerator();
        $user = $generator->create_user();
        $context = \context_system::instance();
        $this->setUser($user);

        $this->assertTrue(plugininfo::is_enabled($context, [], []));

        $this->setGuestUser();
        $this->assertFalse(plugininfo::is_enabled($context, [], []));
    }

    /**
     * Test that each Moodle location exposes the AMD entry module once.
     *
     * @return void
     */
    public function test_available_controls(): void {
        $expected = ['tiny_cceadfontsize/plugin'];

        $this->assertSame($expected, plugininfo::get_available_buttons());
        $this->assertSame($expected, plugininfo::get_available_menuitems());
    }
}
