<template>
<div>
  <!-- <section> -->
      <nav class="navbar is-default ">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text is-active" href="../">
            Issue Tracking
          </a>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  <!-- </section> -->
        <div class="columns is-fullheight">
          <div class="column is-3 is-sidebar-menu is-hidden-mobile">
            <div>
             <figure class="avatar-user has-text-centered">
                <img src="https://placehold.it/128x128">
              </figure>
            </div>
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><a>Dashboard</a></li>
              <li><a>Customers</a></li>
            </ul>
            <p class="menu-label">
              Administration
            </p>
            <ul class="menu-list">
              <li><a>Team Settings</a></li>
              <li>
                <a class="is-active">Manage Your Team</a>
                <ul>
                  <li><a>Members</a></li>
                  <li><a>Plugins</a></li>
                  <li><a>Add a member</a></li>
                </ul>
              </li>
              </ul>

          </aside>
        </div>
          </div>
  <!-- <section class="hero is-success is-fullheight">
    <div class="column is-3 is-paddingless ">
        <div class="box">
          <figure class="avatar-user has-text-centered">
            <img src="https://placehold.it/128x128">
          </figure>

      </div>
    </div>
  </section> -->
</div>
</template>
<script>
export default {
  name: 'Content-Internals'

}
</script>

<style>

</style>

<style lang="sass">

////////////////////////////////////////////////
////////////////////////////////////////////////
// 1. Initial variables

// Colors
$black:        hsl(0, 0%, 4%) !default
$black-bis:    hsl(0, 0%, 7%) !default
$black-ter:    hsl(0, 0%, 14%) !default

$grey-darker:  hsl(0, 0%, 21%) !default
$grey-dark:    hsl(0, 0%, 29%) !default
$grey:         hsl(0, 0%, 48%) !default
$grey-light:   hsl(0, 0%, 71%) !default
$grey-lighter: hsl(0, 0%, 86%) !default

$white-ter:    hsl(0, 0%, 96%) !default
$white-bis:    hsl(0, 0%, 98%) !default
$white:        hsl(0, 0%, 100%) !default

$orange:       hsl(14,  100%, 53%) !default
$yellow:       hsl(48,  100%, 67%) !default
$green:        hsl(141, 71%,  48%) !default
$turquoise:    hsl(171, 100%, 41%) !default
$blue:         hsl(217, 71%,  53%) !default
$purple:       hsl(271, 100%, 71%) !default
$red:          hsl(348, 100%, 61%) !default

// Typography
$family-sans-serif: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !default
$family-monospace: monospace !default
$render-mode: optimizeLegibility !default

$size-1: 3rem !default
$size-2: 2.5rem !default
$size-3: 2rem !default
$size-4: 1.5rem !default
$size-5: 1.25rem !default
$size-6: 1rem !default
$size-7: 0.75rem !default

$weight-light: 300 !default
$weight-normal: 400 !default
$weight-semibold: 500 !default
$weight-bold: 700 !default

// Body
$body-background: #fff !default
$body-size: 16px !default

// Responsiveness
// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
$tablet: 769px !default
// 960px container + 40px
$desktop: 1000px !default
// 1152px container + 40
$widescreen: 1192px !default
// 1344px container + 40
$fullhd: 1384px !default

// Miscellaneous
$easing: ease-out !default
$radius-small: 2px !default
$radius: 3px !default
$radius-large: 5px !default
$speed: 86ms !default

////////////////////////////////////////////////
////////////////////////////////////////////////
// 2. Primary colors

$primary: $turquoise !default

$info: $blue !default
$success: $green !default
$warning: $yellow !default
$danger: $red !default

$light: $white-ter !default
$dark: $grey-darker !default

////////////////////////////////////////////////
////////////////////////////////////////////////
// 3. Applied variables

// Invert colors
$orange-invert: findColorInvert($orange) !default
$yellow-invert: findColorInvert($yellow) !default
$green-invert: findColorInvert($green) !default
$turquoise-invert: findColorInvert($turquoise) !default
$blue-invert: findColorInvert($blue) !default
$purple-invert: findColorInvert($purple) !default
$red-invert: findColorInvert($red) !default

$primary-invert: $turquoise-invert !default
$info-invert: $blue-invert !default
$success-invert: $green-invert !default
$warning-invert: $yellow-invert !default
$danger-invert: $red-invert !default
$light-invert: $dark !default
$dark-invert: $light !default

// General colors
$background: $white-ter !default

$border: $grey-lighter !default
$border-hover: $grey-light !default

// Text colors
$text: $grey-dark !default
$text-invert: findColorInvert($text) !default
$text-light: $grey !default
$text-strong: $grey-darker !default

// Code colors
$code: $red !default
$code-background: $background !default

$pre: $text !default
$pre-background: $background !default

// Link colors
$link: $primary !default
$link-invert: $primary-invert !default
$link-visited: $purple !default

$link-hover: $grey-darker !default
$link-hover-border: $grey-light !default

$link-focus: $grey-darker !default
$link-focus-border: $primary !default

$link-active: $grey-darker !default
$link-active-border: $grey-dark !default

// Typography
$family-primary: $family-sans-serif !default
$family-code: $family-monospace !default

$size-small: $size-7 !default
$size-normal: $size-6 !default
$size-medium: $size-5 !default
$size-large: $size-4 !default

////////////////////////////////////////////////
////////////////////////////////////////////////
// 4. Lists and maps

$colors: ("white": ($white, $black), "black": ($black, $white), "light": ($light, $light-invert), "dark": ($dark, $dark-invert), "primary": ($primary, $primary-invert), "info": ($info, $info-invert), "success": ($success, $success-invert), "warning": ($warning, $warning-invert), "danger": ($danger, $danger-invert)) !default

$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7 !default

////// custom elements

.hero.is-success
  background: rgb(220, 226, 231);

.avatar-user img
  padding: 5px;
  border: 1px solid $grey-light;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);

.box
  box-shadow: 6px 6px 10px rgba(153, 153, 153, 0.507);

////// navbar
$navbar-height: 3.25rem

.is-sidebar-menu
  padding: 2.5rem
  background: $grey-light
  li
    a
      color: $white

.columns
  &.is-fullheight
    min-height: calc(100vh - ( #{$navbar-height} - .75rem ) )
    max-height: calc(100vh - ( #{$navbar-height} - .75rem ) )
    display: flex
    flex-direction: row
    justify-content: stretch
    .column
      overflow-y: auto

.is-main-content
  background: $grey-lighter
</style>
