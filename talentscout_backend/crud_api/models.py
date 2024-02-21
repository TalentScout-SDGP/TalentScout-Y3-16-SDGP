from django.db import models


class Player(models.Model):
    BATTING_STYLE_CHOICES = [
        ('Left Hand', 'Left Hand'),
        ('Right Hand', 'Right Hand'),
    ]

    BOWLING_STYLE_CHOICES = [
        ('Left arm Fast', 'Left arm Fast'),
        ('Left arm Leg Spin', 'Left arm Leg Spin'),
        ('Left arm Medium', 'Left arm Medium'),
        ('Left arm Medium Fast', 'Left arm Medium Fast'),
        ('Left arm Off Spin', 'Left arm Off Spin'),
        ('Right arm Fast', 'Right arm Fast'),
        ('Right arm Leg Spin', 'Right arm Leg Spin'),
        ('Right arm Medium', 'Right arm Medium'),
        ('Right arm Medium Fast', 'Right arm Medium Fast'),
        ('Right arm Off Spin', 'Right arm Off Spin'),
    ]

    PLAYING_ROLE_CHOICES = [
        ('Batsman', 'Batsman'),
        ('Bowler', 'Bowler'),
        ('AllRounder', 'All-Rounder'),
        ('WicketKeeper', 'WicketKeeper'),
    ]

    player_id = models.IntegerField(primary_key=True, unique=True, default=1)
    full_name = models.CharField(max_length=255)
    also_known_as = models.CharField(max_length=255, null=True, blank=True)
    birth_date = models.CharField(max_length=255, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    batting_style = models.CharField(max_length=55, choices=BATTING_STYLE_CHOICES)
    bowling_style = models.CharField(max_length=55, choices=BOWLING_STYLE_CHOICES)
    playing_role = models.CharField(max_length=55, choices=PLAYING_ROLE_CHOICES)
    created_by = models.CharField(max_length=255, null=False, default='Initial');

    class Meta:
        verbose_name_plural = "Player Info"

    def __str__(self):
        return str(self.player_id) + ' - ' + self.full_name


class PlayerBatting(models.Model):
    FORMAT_CHOICES = [
        ('Test', 'Test'),
        ('ODI', 'ODI'),
        ('T20', 'T20'),
    ]

    player = models.ForeignKey(Player, to_field='player_id', on_delete=models.CASCADE)
    batting_id = models.IntegerField(primary_key=True, default=1100)
    format = models.CharField(max_length=4, choices=FORMAT_CHOICES)
    matches = models.IntegerField(null=True, blank=True)
    runs = models.IntegerField(null=True, blank=True)
    innings = models.IntegerField(null=True, blank=True)
    no = models.IntegerField(null=True, blank=True)
    hs = models.IntegerField(null=True, blank=True)
    avg = models.FloatField(null=True, blank=True)
    bf = models.IntegerField(null=True, blank=True)
    sr = models.FloatField(null=True, blank=True)
    centuries = models.IntegerField(null=True, blank=True)
    fifties = models.IntegerField(null=True, blank=True)
    fours = models.IntegerField(null=True, blank=True)
    sixes = models.IntegerField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Batting Stats"

    def __str__(self):
        return str(self.player) + ' - ' + self.format


class PlayerBowling(models.Model):
    FORMAT_CHOICES = [
        ('Test', 'Test'),
        ('ODI', 'ODI'),
        ('T20', 'T20'),
    ]
    player = models.ForeignKey(Player, to_field='player_id', on_delete=models.CASCADE)
    bowling_id = models.IntegerField(primary_key=True, default=1100)
    format = models.CharField(max_length=4, choices=FORMAT_CHOICES)
    matches = models.IntegerField(null=True, blank=True)
    wickets = models.IntegerField(null=True, blank=True)
    innings = models.IntegerField(null=True, blank=True)
    overs = models.IntegerField(null=True, blank=True)
    runs = models.IntegerField(null=True, blank=True)
    bbi = models.CharField(max_length=10, null=True, blank=True)
    avg = models.FloatField(null=True, blank=True)
    econ = models.FloatField(null=True, blank=True)
    sr = models.FloatField(null=True, blank=True)
    four_ws = models.IntegerField(null=True, blank=True)
    five_ws = models.IntegerField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Bowling Stats"

    def __str__(self):
        return str(self.player) + ' - ' + self.format


class PlayerWicketKeeping(models.Model):
    FORMAT_CHOICES = [
        ('Test', 'Test'),
        ('ODI', 'ODI'),
        ('T20', 'T20'),
    ]
    player = models.ForeignKey(Player, to_field='player_id', on_delete=models.CASCADE)
    wicketkeeping_id = models.IntegerField(primary_key=True, default=1100)
    format = models.CharField(max_length=4, choices=FORMAT_CHOICES)
    matches = models.IntegerField(null=True, blank=True)
    innings = models.IntegerField(null=True, blank=True)
    catches = models.IntegerField(null=True, blank=True)
    stumping = models.IntegerField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "WicketKeeping Stats"

    def __str__(self):
        return str(self.player) + ' - ' + self.format

