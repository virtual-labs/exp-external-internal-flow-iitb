function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate convective heat transfer. </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3'>Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate convective heat transfer", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> Water at a temperature of ${act2_t1}<sup>o</sup>C flows through a vertical tube of ${act2_d}mm diameter and ${act2_l}mm long with mean velocity of ${act2_v}m/s. The tube surface is at ${act2_t2}<sup>o</sup>C. Determine convective heat transfer coefficient using colburn anology. </h5>
        <h5> $$ Use\\ \\ st\\ pr^{2/3} = 8 R_e\\ \\ \\ \\ \\ if\\ R_e < 2300 $$ </h5>
        <h5> $$ Use\\ \\ st\\ pr^{2/3} = 0.0395 R_e^{- 1/4}\\ \\ \\ \\ \\ if\\ R_e < 2*10^4 $$ </h5>
        <h5> $$ Use\\ \\ st\\ pr^{2/3} = 0.023 R_e^{1/5}\\ \\ \\ \\ \\ if\\ R_e > 2*10^4 $$ </h5>
        <h5> $$ st = stantan\\ number $$ </h5>
        <h5> The properties of water at mean temperature are: </h5>
        <h5>$$\\rho = ${act2_rho}kg/m^3\\ \\ \\ \\ \\ \\ \\ C_P = ${act2_cp}J/Kg-k $$</h5>
        <h5>$$ K = ${act2_k}w/m-k\\ \\ \\ \\ \\ \\ \\ \\nu = 6.57*10^{-7} $$</h5>
        <br><br>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ R_e = \\frac{V D}{\\nu} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span>

            <button class='btn btn-info std-btn' onclick='verify_act2_re();' id='btn_act2_re' style="width:20%">Verify</button>
        </p>

        <div id="act2_h" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ st\\ P_r^{2/3} = 8 R_e $$
                    $$ \\frac{N_u}{R_e P_r} P_r^{2/3} = 8 R_e $$
                    $$ N_u = 8 R_e^2 \\frac{P_r}{P_r^{2/3}} $$
                    $$ \\frac{h D}{K} = 8 R_e^2 P_r^{1/3} $$
                    $$ h  = 8 R_e^2 P_r^{1/3} \\frac{K}{D} $$
                    $$ h  = 8 R_e^2 (\\frac{\\mu\\ C_P}{K})^{1/3} \\frac{K}{D} $$
                    $$ h  = 8 R_e^2 (\\frac{\\nu\\ \\rho\\ C_P}{K})^{1/3} \\frac{K}{D} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> w/m<sup>2</sup>-k

                <button class='btn btn-info std-btn' onclick='verify_act2_h();' id='btn_act2_h' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_le_h" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ st\\ P_r^{2/3} = 0.0395 R_e^{-1/4} $$
                    $$ \\frac{N_u}{R_e P_r} P_r^{2/3} = 0.0395 R_e^{-1/4} $$
                    $$ N_u = 0.0395 R_e^{3/4} \\frac{P_r}{P_r^{2/3}} $$
                    $$ \\frac{h D}{K} = 0.0395 R_e^{3/4} P_r^{1/3} $$
                    $$ h  = 0.0395 R_e^{3/4} (\\frac{\\nu\\ \\rho\\ C_P}{K})^{1/3} \\frac{K}{D} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> w/m<sup>2</sup>-k

                <button class='btn btn-info std-btn' onclick='verify_act2_le_h();' id='btn_act2_le_h' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_gr_h" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ st\\ P_r^{2/3} = 0.023\\ R_e^{1/5} $$
                    $$ \\frac{N_u}{R_e P_r} P_r^{2/3} = 0.023\\ R_e^{1/5} $$
                    $$ N_u = 0.023\\ R_e^{4/5}\\ P_r^{1/3} $$
                    $$ \\frac{h D}{K} = 0.023\\ R_e^{4/5}\\ P_r^{1/3} $$
                    $$ h = 0.023\\ R_e^{4/5} (\\frac{\\nu\\ \\rho\\ C_P}{K})^{1/3} \\frac{K}{D} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> w/m<sup>2</sup>-k

                <button class='btn btn-info std-btn' onclick='verify_act2_gr_h();' id='btn_act2_gr_h' style="width:20%">Verify</button>
            </p>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    let act2_d_val = act2_d / 1000;
    act2_re = (act2_v * act2_d_val) / act2_nu;
    if (act2_re < 2300) {
        act2_h = 8 * Math.pow(act2_re, 2) * (Math.pow(((act2_nu * act2_rho * act2_cp) / act2_k), (1.0 / 3.0))) * (act2_k / act2_d_val);
    }
    else if (act2_re > 2300 && act2_re < 20000) {
        act2_le_h = 0.0395 * Math.pow(act2_re, (3.0 / 4.0)) * (Math.pow(((act2_nu * act2_rho * act2_cp) / act2_k), (1.0 / 3.0))) * (act2_k / act2_d_val);
    }
    else {
        act2_gr_h = 0.023 * Math.pow(act2_re, (4.0 / 5.0)) * (Math.pow(((act2_nu * act2_rho * act2_cp) / act2_k), (1.0 / 3.0))) * (act2_k / act2_d_val);
    }
    console.log("act2 Re= ", act2_re);
    console.log("act2 h= ", act2_h);
    console.log("act2 le h= ", act2_le_h);
    console.log("act2 gr h= ", act2_gr_h);
}
function verify_act2_re() {
    let btn = document.getElementById('btn_act2_re');
    let inp7 = document.getElementById('cal07-inp');
    let sp7 = document.getElementById('cal07-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(3)), parseFloat(act2_re.toFixed(3)))) {
        alert('Re value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp7.remove();
    sp7.innerText = `${(act2_re).toFixed(3)}`;
    if (act2_re < 2300) {
        let div = document.getElementById('act2_h');
        div.style.display = 'block';
    }
    else if (act2_re > 2300 && act2_re < 20000) {
        let div = document.getElementById('act2_le_h');
        div.style.display = 'block';
    }
    else {
        let div = document.getElementById('act2_gr_h');
        div.style.display = 'block';
    }
}
function verify_act2_h() {
    let btn = document.getElementById('btn_act2_h');
    let inp8 = document.getElementById('cal08-inp');
    let sp8 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(2)), parseFloat(act2_h.toFixed(2)))) {
        alert('h value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp8.remove();
    sp8.innerText = `${(act2_h).toFixed(3)}`;
    exp_complete();
}
function verify_act2_le_h() {
    let btn = document.getElementById('btn_act2_le_h');
    let inp9 = document.getElementById('cal09-inp');
    let sp9 = document.getElementById('cal09-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(3)), parseFloat(act2_le_h.toFixed(3)))) {
        alert('h value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp9.remove();
    sp9.innerText = `${(act2_le_h).toFixed(3)}`;
    exp_complete();
}
function verify_act2_gr_h() {
    let btn = document.getElementById('btn_act2_gr_h');
    let inp10 = document.getElementById('cal10-inp');
    let sp10 = document.getElementById('cal10-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(3)), parseFloat(act2_gr_h.toFixed(3)))) {
        alert('Qs value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp10.remove();
    sp10.innerText = `${(act2_gr_h).toFixed(3)}`;
    exp_complete();
}
function exp_complete() {
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map