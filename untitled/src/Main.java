import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class Main {

    public static void main(String[] args) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE MMM dd yyyy HH:mm:ss", Locale.US);
        String test = "Thu Nov 29 2018 16:00:26 ";

    LocalDateTime g=        LocalDateTime.parse(test,formatter);

        System.out.println(g);
    }
}
