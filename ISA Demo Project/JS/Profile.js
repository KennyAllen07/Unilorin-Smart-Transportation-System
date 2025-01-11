function toggleDropdown() {
    document.getElementById('dropdown').classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.profile-pic')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function switchAccount() {
    alert("Switch account functionality here.");
}

function signOut() {
    // Redirect to the signout.html page
    window.location.href = '../Pages/Index Page.html';
}
function DeleteAccount()
{
    alert("Account Deleted");
}
