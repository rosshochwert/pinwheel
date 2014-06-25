# For an explanation of the steroids.config properties, see the guide at
# http://guides.appgyver.com/steroids/guides/project_configuration/config-application-coffee/

steroids.config.name = "theMove"

# ## Start Location
steroids.config.location = "http://localhost/views/home/index.html"

# ## Tab Bar
# steroids.config.tabBar.enabled = true
# steroids.config.tabBar.tabs = [
#   {
#     title: "Index"
#     icon: "icons/pill@2x.png"
#     location: "http://localhost/index.html"
#   },
#   {
#     title: "Internet"
#     icon: "icons/telescope@2x.png"
#     location: "http://www.google.com"
#   }
# ]

# steroids.config.tabBar.tintColor = "#000000"
# steroids.config.tabBar.tabTitleColor = "#00aeef"
# steroids.config.tabBar.selectedTabTintColor = "#ffffff"
# steroids.config.tabBar.selectedTabBackgroundImage = "icons/pill@2x.png"

# steroids.config.tabBar.backgroundImage = ""

## Preloads
steroids.config.preloads = [
  {
    id: "loginView"
    location: "http://localhost/views/introScreen/login.html"
  }
  {
  	id: "homeView"
  	location: "http://localhost/views/home/index.html"
  }
  {
    id: "createEventView"
    location: "http://localhost/views/events/create.html"
  }
  {
    id: "individualEventView"
    location: "http://localhost/views/events/individualEvent.html"
  }
]

# ## Drawers
steroids.config.drawers =
  left:
    id: "drawerView"
    location: "http://localhost/views/home/drawer.html"
    showOnAppLoad: false
    widthOfDrawerInPixels: 250
  options:
    centerViewInteractionMode: "None"
    closeGestures: ["PanNavBar", "PanCenterView", "PanBezelView", "TapCenterView", "TapNavBar"]
    openGestures: ["PanNavBar"]
    showShadow: true
    stretchDrawer: false
    widthOfLayerInPixels: 0

# ## Initial View
# steroids.config.initialView =
#   id: "initialView"
#   location: "http://localhost/initialView.html"

# ## Navigation Bar
steroids.config.navigationBar.tintColor = "#1abc9c"
steroids.config.navigationBar.titleColor = "#ffffff"
steroids.config.navigationBar.buttonTintColor = "#ffffff"

# steroids.config.navigationBar.borderColor = "#000000"
# steroids.config.navigationBar.borderSize = 2

# steroids.config.navigationBar.landscape.backgroundImage = ""
# steroids.config.navigationBar.portrait.backgroundImage = ""

# ## Android Loading Screen
steroids.config.loadingScreen.tintColor = "#262626"

# ## iOS Status Bar
steroids.config.statusBar.enabled = true
steroids.config.statusBar.style = "default"

# ## File Watcher
# steroids.config.watch.exclude = ["www/my_excluded_file.js", "www/my_excluded_dir"]

# ## Pre- and Post-Make Hooks
# steroids.config.hooks.preMake.cmd = "echo"
# steroids.config.hooks.preMake.args = ["running yeoman"]
# steroids.config.hooks.postMake.cmd = "echo"
# steroids.config.hooks.postMake.args = ["cleaning up files"]

# ## Default Editor
# steroids.config.editor.cmd = "subl"
# steroids.config.editor.args = ["."]
