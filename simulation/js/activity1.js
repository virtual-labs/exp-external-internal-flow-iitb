let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>External and internal Flow</h5>
        <p>Learning Objective: Calculate the velocity of air required to have rate of energy dissipation.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate velocity", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> A flat plate ${act1_b}m wide and ${act1_l}m long is to be maintained at ${act1_t1}<sup>o</sup>C in air with free steam temperature of ${act1_t2}<sup>o</sup>C blowing along ${act1_l}m side of plate. Determine the velocity of air required to have rate of energy dissipation of ${act1_q}KW. Take the following air properties at mean temperature. </h5>
        <h5>$$\\rho = ${act1_rho}\\ \\ \\ \\ \\ \\ \\ K = ${act1_k}w/m-k\\ \\ \\ \\ \\ \\ \\ C_P = ${act1_cp}J/Kg-k $$</h5>
        <h5>$$ P_r = ${act1_pr}\\ \\ \\ \\ \\ \\ \\ \\mu = ${act1_mu_disp}*10^{-5}Kg/m-s $$</h5>
        
        <p style='text-align: center;'> <span style='display: inline-block;' >
            Use
            <span style='display: inline-block;' >
                $$  N_u = 0.664 R_e^{0.5} P_r^{1/3} $$
            </span>
            for laminar flow.
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            Use
            <span style='display: inline-block;' >
                $$  N_u = (0.036 R_e^{4/5} - 836) P_r^{1/3} $$
            </span>
            for turbulent flow.
        </p>
        <br><br>


        <h5>Heat transfer coefficient</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = h A \\Delta T $$
                $$ h = \\frac{Q}{A \\Delta T} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> w/m<sup>2</sup>-k

            <button class='btn btn-info std-btn' onclick='verify_act1_h();' id='btn_act1_h' style="width:20%">Verify</button>
        </p>

        <div id="act1_nu" style="display: none">
            <h5>Assuming Laminar Flow</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;'>
                    $$ N_u = 0.664 R_e^{0.5} P_r^{1/3} $$
                    $$ N_u = \\frac{h L}{K} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_nu();' id='btn_act1_nu' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_re" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ R_e = (\\frac{N_u}{0.664 P_r^{1/3}})^2 $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_re();' id='btn_act1_re' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_gr_re" style="display: none">
            <h5>Flow is not laminar, it is turbulant</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ N_u = (0.036 R_e^{4/5} - 836) P_r^{1/3} $$
                    $$ R_e = (\\frac{[\\frac{N_u}{P_r^{1/3}} + 836]}{0.036})^{(5/4)} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_gr_re();' id='btn_act1_gr_re' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_v" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ R_e = \\frac{\\rho V L}{\\mu} $$
                    $$ V = \\frac{R_e \\mu}{\\rho L} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> m/s

                <button class='btn btn-info std-btn' onclick='verify_act1_v();' id='btn_act1_v' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_le_v" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ R_e = \\frac{\\rho V L}{\\mu} $$
                    $$ V = \\frac{R_e \\mu}{\\rho L} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> m/s

                <button class='btn btn-info std-btn' onclick='verify_act1_le_v();' id='btn_act1_le_v' style="width:20%">Verify</button>
            </p>
        </div>
    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    let q = act1_q * 1000;
    act1_h = q / (act1_a * act1_del_t);
    act1_nu = (act1_h * act1_l) / act1_k;
    act1_re = Math.pow((act1_nu / (0.664 * Math.pow(act1_pr, (1.0 / 3.0)))), 2);
    console.log("Q= ", q);
    console.log("h= ", act1_h);
    console.log("Nu= ", act1_nu);
    console.log("Re= ", act1_re);
    if (act1_re > 500000) {
        act1_gr_re = Math.pow((((act1_nu / Math.pow(act1_pr, (1.0 / 3.0))) + 836) / 0.036), (5.0 / 4.0));
        act1_gr_v = (act1_gr_re * act1_mu) / (act1_rho * act1_l);
        console.log("inc Re= ", act1_gr_re);
        console.log("inc V= ", act1_gr_v);
    }
    else {
        act1_le_v = (act1_re * act1_mu) / (act1_rho * act1_l);
        console.log("dec V= ", act1_le_v);
    }
}
function verify_act1_h() {
    let btn = document.getElementById('btn_act1_h');
    let div = document.getElementById('act1_nu');
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(3)), parseFloat(act1_h.toFixed(3)))) {
        alert('Q value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act1_h).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_nu() {
    let btn = document.getElementById('btn_act1_nu');
    let div = document.getElementById('act1_re');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act1_nu.toFixed(2)))) {
        alert('Nu value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp2.remove();
    sp2.innerText = `${(act1_nu).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_re() {
    let btn = document.getElementById('btn_act1_re');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(3)), parseFloat(act1_re.toFixed(3)))) {
        alert('Re value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp3.remove();
    sp3.innerText = `${(act1_re).toFixed(3)}`;
    if (act1_re > 500000) {
        let div = document.getElementById('act1_gr_re');
        div.style.display = 'block';
    }
    else {
        let div = document.getElementById('act1_le_v');
        div.style.display = 'block';
    }
}
function verify_act1_gr_re() {
    let btn = document.getElementById('btn_act1_gr_re');
    let div = document.getElementById('act1_v');
    let inp4 = document.getElementById('cal04-inp');
    let sp4 = document.getElementById('cal04-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(3)), parseFloat(act1_gr_re.toFixed(3)))) {
        alert('Re value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp4.remove();
    sp4.innerText = `${(act1_gr_re).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act1_v() {
    let btn = document.getElementById('btn_act1_v');
    let inp5 = document.getElementById('cal05-inp');
    let sp5 = document.getElementById('cal05-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(3)), parseFloat(act1_gr_v.toFixed(3)))) {
        alert('V value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp5.remove();
    sp5.innerText = `${(act1_gr_v).toFixed(3)}`;
    activity2();
}
function verify_act1_le_v() {
    let btn = document.getElementById('btn_act1_le_v');
    let inp6 = document.getElementById('cal06-inp');
    let sp6 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(3)), parseFloat(act1_le_v.toFixed(3)))) {
        alert('Reduction percentage is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp6.remove();
    sp6.innerText = `${(act1_le_v).toFixed(3)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map