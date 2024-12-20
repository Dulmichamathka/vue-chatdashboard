<template>
  <v-card
    flat
    style="
      width: 450px;
      margin-top: 90px !important;
      margin-left: 70px !important;
      background-color: #171721;
      height: 100%;
    "
  >
    <div
      class="pa-3 d-flex align-center ml-4"
      style="
        width: 420px;
        height: 60px;
        border-radius: 18px;
        background-color: #1e1f25;
      "
    >
      <v-avatar class="mr-3"
        ><img src="/profile.jpg" width="50px" height="50px"
      /></v-avatar>
      <div>
        <p style="font-weight: 500; font-size: 13px; color: white">
          Dulmi Chamathka
        </p>
        <small style="color: #3c4254">dulmichamathka@gmail.com</small>
      </div>
      <v-spacer></v-spacer>
      <v-icon size="17" color="#757B8C" class="mr-2">fas fa-trash</v-icon>
      <v-icon size="17" color="#757B8C" class="mr-2">fas fa-bookmark</v-icon>
      <v-icon size="17" color="#757B8C" class="mr-2"
        >fas fa-square-minus</v-icon
      >
    </div>

    <div style="padding: 0 20px">
      <h3 style="color: #fafafb; margin-top: 25px">
        Fimga User Interface Reviews, the Best <br />
        Resource for Design and Designers
      </h3>
      <div style="font-size: 15px; color: #b5b5be; text-align: justify">
        <p class="mt-4 mb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          provident necessitatibus architecto alias, deserunt ab cupiditate
          dolor aliquam earum non iusto, quidem placeat sit animi in voluptatum?
          Excepturi, dolorem! Pariatur?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Asperiores, fugit. Cupiditate architecto perferendis
          asperiores aspernatur dolorum quaerat?
        </p>
        <p class="mb-3">
          Laborum commodi, tempore sapiente quam nisi in consequuntur amet vero
          quod rem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas fugit nostrum non quisquam quibusdam ea nihil vel,
        </p>

        <p class="mb-3">
          Best Regards,<br />
          Shehan Chamilka
        </p>
      </div>
      <div class="d-flex" style="cursor: pointer">
        <div
          style="
            width: 200px;
            height: 60px;
            border-radius: 10px;
            background-color: #1e1f25;
            padding: 8px;
            display: flex;
            align-items: center;
            margin-right: 10px;
          "
        >
          <v-btn
            style="
              min-width: 0px !important;
              margin-right: 8px;
              background-color: blue;
            "
            ><v-icon color="#246CF9">fas fa-folder</v-icon></v-btn
          >
          <div class="d-flex flex-column">
            <p style="font-size: small; font-weight: 600; color: white">
              New Dashboard.fig
            </p>
            <small style="color: #3c4254">145.5 MB</small>
          </div>
        </div>

        <div
          style="
            width: 200px;
            height: 60px;
            border-radius: 10px;
            background-color: #1e1f25;
            padding: 8px;
            display: flex;
            align-items: center;
          "
        >
          <v-btn
            style="
              min-width: 0px !important;
              margin-right: 8px;
              background-color: blue;
            "
            ><v-icon color="#246CF9">fas fa-folder</v-icon></v-btn
          >
          <div class="d-flex flex-column">
            <p style="font-size: small; font-weight: 600; color: white">
              New Dashboard.fig
            </p>
            <small style="color: #3c4254">145.5 MB</small>
          </div>
        </div>
      </div>
    </div>

    <v-card class="rounded-xl mt-15 ml-5" color="#1e1f25">
      <div class="d-flex align-center pa-4">
        <v-icon color="blue">fas fa-reply</v-icon>
        <div class="ml-3">
          <p style="font-weight: 500; font-size: 13px; color: white">
            Dulmi Chamathka
          </p>
          <small style="color: #3c4254">dulmichamathka@gmail.com</small>
        </div>
        <v-spacer></v-spacer>
        <v-icon size="17" color="#757B8C" class="mr-2">fas fa-trash</v-icon>
        <v-icon size="17" color="#757B8C" class="mr-2"
          >fas fa-square-minus</v-icon
        >
      </div>
      <v-divider></v-divider>
      <div class="pa-4">
        <p style="font-size: 13px; text-align: start; color: #b5b5be">
          Ok dude..! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Unde, ut alias quo nam minus vitae est quia assumenda facere, tenetur
          adipisci dolores sapiente iure voluptas! Repellendus aliquid ut quod
          consectetur!
        </p>
      </div>
      <v-divider></v-divider>
      <div class="pa-4 d-flex align-center">
        <v-btn
          color="#1E75FF"
          style="text-transform: capitalize; border-radius: 12px"
          >Send Messeage</v-btn
        >
        <v-spacer></v-spacer>
        <v-icon size="17" color="#757B8C" class="mr-4">fas fa-folder</v-icon>
        <v-icon size="17" color="#757B8C" class="mr-4">fas fa-paperclip</v-icon>
        <v-icon size="17" color="#757B8C" class="mr-4"
          >fas fa-face-smile</v-icon
        >
        <v-icon size="17" color="#246CF9" class="mr-2"
          >fas fa-microphone</v-icon
        >
      </div>
    </v-card>
  </v-card>
</template>

<script setup></script>
