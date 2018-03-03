<template>
<div>
  <section >
    <nav class="navbar is-default is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-semibold is-active" href="../">
          Issue Tracking - Rastreio de seus tickets
        </a>
      </div>
    </div>
  </nav>
  </section>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-primary" type="text" placeholder="Usuário" >
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input is-primary" type="password" placeholder="Senha">
                </div>
              </div>
              <div class="control has-5-mt">
                <button class="button is-block is-primary is-fullwidth">Login</button>
              </div>
                <div class="field has-5-mt">
                  <div class="control">
                  <label class="checkbox"><input type="checkbox"> Lembrar</label>
                  </div>
              </div>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../" >Primeiro Acesso</a> &nbsp;·&nbsp;
            <a href="../">Esqueceu a Senha</a> &nbsp;·&nbsp;
            <a href="../">Ajuda</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  name: 'Login-view'
}
</script>
<style scoped>

.hero.is-success {
  background: rgb(220, 226, 231);
}

.box {
  box-shadow: 6px 6px 10px rgba(153, 153, 153, 0.507);
}

.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}

.avatar img {
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}

p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.has-5-mt {
  margin-top: 5%;
}

</style>
