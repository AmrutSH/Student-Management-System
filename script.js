$(document).ready(function() {
    $('#studentForm').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var phone = $('#phone').val();
        var dob = $('#dob').val();
        var gender = $('input[name="gender"]:checked').val();
        var address = $('#address').val();

        // Validate name - should not be empty and should not contain numbers
        if (name === '' || /\d/.test(name)) {
            alert('Please enter a valid name without numbers.');
            return;
        }

        // Validate phone number
        if (!/^\d{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        var newRow = '<tr><td contenteditable="false">' + name + '</td><td contenteditable="false">' + phone + '</td><td contenteditable="false">' + dob + '</td><td contenteditable="false">' + gender + '</td><td contenteditable="false">' + address + '</td><td class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></td></tr>';
        $('#studentTableBody').append(newRow);
        $('#name, #phone, #dob, #address').val('');
    });

    // Delete student record
    $('#studentList').on('click', '.delete', function() {
        $(this).closest('tr').remove();
    });

    // Inline Edit student record
    $('#studentList').on('click', '.edit', function() {
        var $row = $(this).closest('tr');
        if ($(this).text() === 'Edit') {
            $(this).text('Save');
            $row.find('td').attr('contenteditable', 'true');
        } else {
            // Get edited values
            var name = $row.find('td:eq(0)').text();
            var phone = $row.find('td:eq(1)').text();
            var dob = $row.find('td:eq(2)').text();
            var gender = $row.find('td:eq(3)').text();
            var address = $row.find('td:eq(4)').text();

            // Validate name - should not be empty and should not contain numbers
            if (name === '' || /\d/.test(name)) {
                alert('Please enter a valid name without numbers.');
                return;
            }

            // Validate phone number
            if (!/^\d{10}$/.test(phone)) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }

            // Update table cell content
            $row.find('td:eq(0)').text(name);
            $row.find('td:eq(1)').text(phone);
            $row.find('td:eq(2)').text(dob);
            $row.find('td:eq(3)').text(gender);
            $row.find('td:eq(4)').text(address);
            
            $(this).text('Edit');
            $row.find('td').attr('contenteditable', 'false');
        }
    });
});
