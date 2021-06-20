    /* 
    Sameer Ahmed 
    Fell free to contact me for any queries

    Github : https://github.com/sameerad2001/PersonalWebsiteDemo/edit/master/README.md
    Linkedin : https://www.linkedin.com/in/sameer-ahmed-0b7902176/
    Email : Sameerad2001@gmail.com
    */


    // alert("Hello 😊")

    let curr_grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let curr_player = 1;

    const win_states = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    function change_player() {
        curr_player = curr_player == 1 ? 2 : 1;
    }

    function display_game_over(winner) {
        if (winner != 0)
            alert("Winner : Player " + winner + " 💥");
        else alert("Draw 😅")
    }

    function reset() {

        // Un-Click all the buttons on the grid
        for (let position = 0; position < 9; position++)
            curr_grid[position] = 0;

        // change_player() is called after reset
        // and it will always change it back to 1 afterwards
        curr_player = 2;

        select_buttons.forEach((curr_button) => {
            curr_button.style.backgroundColor = "#0d6efd"
        });
    }

    function is_game_over() {

        let is_over = false;
        let winner = 0;

        win_states.forEach((state) => {
            let count = 0;

            for (let position = 0; position < 3; position++) {
                if (curr_grid[state[position]] == curr_player) {
                    count++;
                }

                if (count == 3) {
                    is_over = true;
                    winner = curr_player
                    break;
                }
            }
        })

        // If no one won check for a draw 
        if (!is_over) {
            let count = 0;

            // Check if all buttons on the grid are pressed
            for (let position = 0; position < 9; position++) {
                if (curr_grid[position] != 0)
                    count++;
            }

            // no of pressed buttons = total buttons
            if (count == 9)
                is_over = true;
        }

        if (is_over) {
            display_game_over(winner);
            reset();
        }
    }

    const select_buttons = document.querySelectorAll(".select_button");

    select_buttons.forEach((curr_button) => {
        curr_button.addEventListener("click", () => {

            let index = parseInt(curr_button.innerHTML);

            if (curr_grid[index] == 0) {

                curr_grid[index] = curr_player;

                if (curr_player == 1)
                    curr_button.style.backgroundColor = "#ff1707";
                else
                    curr_button.style.backgroundColor = "#ffc107";

                is_game_over();
                change_player();
            }
        })
    })


    // Copy Right Message
    let curr_year = new Date().getFullYear();

    let copyright_para = document.getElementById('copyright');
    copyright_para.innerHTML += " " + curr_year;

    // Blinking Heading and left grid every 0.5 sec
    let big_head = document.getElementById('big_head');
    let left_grid = document.querySelectorAll('.no_top');

    let alternate = true;

    setInterval(function() {
        if (alternate) {
            big_head.classList.remove('blink')
            big_head.classList.add("big_head_normal")

            left_grid.forEach((grid) => {
                // grid.style.color = "#ffc107";
                grid.classList.remove('grad');
            })

            alternate = false;
        } else {
            big_head.classList.remove('big_head_normal')
            big_head.classList.add("blink")

            left_grid.forEach((grid) => {
                // grid.style.color = "#6ef3d6";
                grid.classList.add('grad');
            })

            alternate = true;
        }
    }, 500);