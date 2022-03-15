<script>

</script>

<template>
    <div class="task-bar-content">
        <div class="bar">
            <object data="/task-bar-top.svg" type="image/svg+xml"></object>
            <img src="@/assets/LincolnLogo.png" alt="" class="logo">
            <h2>Sign Out</h2>
        </div>
        <div class="invis">

        </div>
    </div>
</template>

<style scoped>
.task-bar-content {
    width: 375px;
    height: 667px;
    display: flex;
    position: fixed;
    z-index: 100;
}

.bar {
    width: 236px;
    height: 100%;
    background-color: #002147;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.logo {
    width: 120px;
    position: fixed;
    left: 5px;
    top: 5px;
}

.bar h2 {
    color: white;
    margin: 15px;
    font-size: 1.3em;
}

.invis {
    width: 60%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>