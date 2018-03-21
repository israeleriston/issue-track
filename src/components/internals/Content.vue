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
        <div class="columns is-fullheight hero is-success">
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
<style lang="scss">

// .hero.is-success
//   background: rgb(220, 226, 231);

// .avatar-user img
//   padding: 5px;
//   border: 1px $grey-light solid ;
//   border-radius: 50%;
//   box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);

// .box
//   box-shadow: 6px 6px 10px rgba(153, 153, 153, 0.507);

////// navbar
$navbar-height: 3.25rem;

.is-sidebar-menu
  padding: 2.5rem;
  background: $grey-light;
  li
    a
      color: $white;


.columns
  &.is-fullheight
    min-height: calc(100vh - ( #{$navbar-height} - .75rem ) );
    max-height: calc(100vh - ( #{$navbar-height} - .75rem ) );
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    .column
      overflow-y: auto;

.is-main-content
  background: $grey-lighter;
</style>
